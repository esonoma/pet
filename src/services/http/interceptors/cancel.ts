import { nanoid } from "nanoid";
import {
	getCancelController,
	AxiosRequestConfigWithBaseCancel,
	filterCancelRequest,
} from "../cancels";

// 注册取消的Controller
export default function setCancelController<
	RequestConfig extends AxiosRequestConfigWithBaseCancel = AxiosRequestConfigWithBaseCancel,
>(config: RequestConfig) {
	const supportCancel = shouldSupportCancelController<RequestConfig>(config);
	if (!supportCancel) {
		return;
	}
	standardizeCancelModes<RequestConfig>(config).forEach(
		(enabledCancelMode) => {
			getCancelController(enabledCancelMode)?.registerCancel(config);
		},
	);
}

// 取消请求
export function applyCancelRequest(
	cancelId: string,
	cancelMessage?: string,
	cancelModes: (string | "axios" | "abort")[] = ["axios", "abort"],
) {
	// 将取消放在微任务队列中：可以解决还没有注册就取消任务的情况
	// 因为在立即调用的情况下，拦截器会后于取消请求执行（导致取消函数一直无法注册）
	setTimeout(() => {
		filterCancelRequest(cancelModes).forEach((cancelMode) => {
			const controller = getCancelController(cancelMode);
			if (controller?.isRegisteredCancelTask(cancelId)) {
				controller?.applyExecuteCancelTask(cancelId, cancelMessage);
			}
		});
	});
}

// 移除取消Controller的注册
export function removeCancelableTasks(
	cancelId: string,
	cancelModes: (string | "axios" | "abort")[] = ["axios", "abort"],
) {
	filterCancelRequest(cancelModes).forEach((cancelMode) => {
		const controller = getCancelController(cancelMode);
		if (controller?.isRegisteredCancelTask(cancelId)) {
			getCancelController(cancelMode)?.removeCancelableTask(cancelId);
		}
	});
}

// 安全的取消
export function validateIsCancelRequestAndRemove<
	RequestConfig extends AxiosRequestConfigWithBaseCancel = AxiosRequestConfigWithBaseCancel,
>(config: RequestConfig) {
	if (config.cancelId) {
		removeCancelableTasks(config.cancelId, config.cancelModes);
	}
}

function shouldSupportCancelController<
	RequestConfig extends AxiosRequestConfigWithBaseCancel = AxiosRequestConfigWithBaseCancel,
>(config: RequestConfig) {
	return !!config.cancelId;
}

function standardizeCancelModes<
	RequestConfig extends AxiosRequestConfigWithBaseCancel = AxiosRequestConfigWithBaseCancel,
>(config: RequestConfig): (string | "axios" | "abort")[] {
	return config?.cancelModes || ["axios"];
}

export function applyCancelId(len = 20): string {
	return nanoid(len);
}
