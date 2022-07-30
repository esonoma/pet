import axios, { CancelTokenSource } from "axios";
import BaseCancel, { AxiosRequestConfigWithBaseCancel } from "./BaseCancel";

export default class AxiosCancelTokenCancel extends BaseCancel {
	public cancelMode = "axios";

	public registerCancel<
		RequestConfig extends AxiosRequestConfigWithBaseCancel = AxiosRequestConfigWithBaseCancel,
	>(config: RequestConfig): void {
		const cancelTokenSource = axios.CancelToken.source();
		config.cancelToken = cancelTokenSource.token;
		this.addCancelableTask(config.cancelId as string, cancelTokenSource);
	}

	public applyExecuteCancelTask(cancelId: string, message?: string): void {
		this.getCancelableTask<CancelTokenSource>(cancelId)?.cancel(message);
		this.removeCancelableTask(cancelId);
	}
}
