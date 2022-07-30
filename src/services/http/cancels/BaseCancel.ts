import { AxiosRequestConfig, CancelTokenSource } from "axios";
import { BaseMapStore, deleteProperty } from "@/helpers";

export interface AxiosRequestConfigWithBaseCancel extends AxiosRequestConfig {
	cancelId?: string | "axios" | "abort";
	cancelModes?: string[] | ("axios" | "abort")[];
}

export default abstract class BaseCancel extends BaseMapStore {
	abstract cancelMode: string;

	abstract registerCancel<
		RequestConfig extends AxiosRequestConfigWithBaseCancel = AxiosRequestConfigWithBaseCancel,
	>(config: RequestConfig): void;

	public unregisterCancel<
		RequestConfig extends AxiosRequestConfigWithBaseCancel = AxiosRequestConfigWithBaseCancel,
	>(config: RequestConfig): void {
		deleteProperty(config, "signal");
		this.clear();
	}

	abstract applyExecuteCancelTask(cancelId: string, message?: string): void;

	public addCancelableTask<
		CancelController = CancelTokenSource | AbortController,
	>(cancelId: string, cancelController: CancelController): void {
		this.set(cancelId, cancelController);
	}

	public isRegisteredCancelTask(cancelId: string): boolean {
		return this.has(cancelId);
	}

	public removeCancelableTask(cancelId: string): boolean {
		return this.delete(cancelId);
	}

	public getCancelableTask<CancelController>(
		cancelId: string,
	): CancelController | undefined {
		return this.get(cancelId);
	}
}
