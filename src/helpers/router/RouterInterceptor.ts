import { getActivePage, isStrictPromise } from "..";

export type BeforeEachCallback = (
	options: any,
	previous?: Page.PageInstance<AnyObject, object>,
) => boolean | void | Promise<boolean | void>;
export type AfterEachCallback = (options: any) => void | Promise<void>;
export type BeforeAbortCallback<
	FOptions = any,
	TOptions = any,
	Reason = Record<string, any>,
> = (form: FOptions, to: TOptions, reason: Reason) => void;

export default class RouterInterceptor {
	protected onBeforeEachCallback?: BeforeEachCallback[] = [];

	protected onBeforeAbortCallback: BeforeAbortCallback | null = null;

	protected onAfterEachCallback?: AfterEachCallback[] = [];

	public onBeforeEach(onBeforeEachCallback: BeforeEachCallback) {
		this.onBeforeEachCallback?.push(onBeforeEachCallback);
		return () => {
			this.onBeforeEachCallback?.filter(
				(callback) => callback !== onBeforeEachCallback,
			);
		};
	}

	public onBeforeAbort(onBeforeAbortCallback: BeforeAbortCallback) {
		this.onBeforeAbortCallback = onBeforeAbortCallback;
	}

	public onAfterEach(onAfterEachCallback: AfterEachCallback) {
		this.onAfterEachCallback?.push(onAfterEachCallback);
		return () => {
			this.onAfterEachCallback?.filter(
				(callback) => callback !== onAfterEachCallback,
			);
		};
	}

	protected dispatchBeforeEach(options: any, nextFunc?: () => void) {
		if (this.onBeforeEachCallback?.length) {
			const activePage = getActivePage();
			this.onBeforeEachCallback?.forEach(async (beforeCallback) => {
				const beforeCallbackResult = beforeCallback(
					options,
					activePage,
				);
				const nextStatus = isStrictPromise(beforeCallbackResult)
					? await beforeCallbackResult
					: beforeCallbackResult;

				// 返回 false ｜ promise<false> 则中断后续操作
				if (nextStatus === false) {
					this.onBeforeAbortCallback?.(activePage, options, {});
				} else {
					nextFunc?.();
				}
			});
		}
	}

	protected dispatchAfterEach(params: any) {
		this.onAfterEachCallback?.forEach((afterCallback) => {
			afterCallback(params);
		});
	}
}
