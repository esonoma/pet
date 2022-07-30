import BaseCancel, { AxiosRequestConfigWithBaseCancel } from "./BaseCancel";

export default class AbortControllerCancel extends BaseCancel {
	public cancelMode = "abort";

	public registerCancel<
		RequestConfig extends AxiosRequestConfigWithBaseCancel = AxiosRequestConfigWithBaseCancel,
	>(config: RequestConfig): void {
		const signalController = new AbortController();
		config.signal = signalController.signal;
		this.addCancelableTask(config.cancelId as string, signalController);
	}

	public applyExecuteCancelTask(cancelId: string, _message?: string): void {
		this.getCancelableTask<AbortController>(cancelId)?.abort();
		this.removeCancelableTask(cancelId);
	}
}
