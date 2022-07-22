import { Eventemitter } from "@/helpers";
import { AnyFunction } from "@/types/utils";
import { PresetMessageStatus, BaseMessage } from "./messages";

export default class BaseWebsocketClient extends Eventemitter<AnyFunction> {
	public configs: UniApp.ConnectSocketOption;

	public socketTask: UniApp.SocketTask | null = null;

	public socketConnected = false;

	constructor(configs: UniApp.ConnectSocketOption) {
		super();
		this.configs = configs;
	}

	start(
		...callbacks: AnyFunction[]
	): Promise<UniApp.OnSocketOpenCallbackResult> {
		return this.connect().open(...callbacks);
	}

	connect() {
		this.socketTask = uni.connectSocket({
			...this.configs,
			success: (res) => {
				// this.emit("connect", res);
				if (this.configs.success) {
					this.configs.success(res);
				}
			},
		});
		return this;
	}

	open(
		openSuccessCallback?: AnyFunction,
		openFailCallback?: AnyFunction,
	): Promise<UniApp.OnSocketOpenCallbackResult> {
		return new Promise((resolve, reject) => {
			this.socketTask?.onOpen(
				(res: UniApp.OnSocketOpenCallbackResult) => {
					this.socketConnected = true;
					if (openSuccessCallback) {
						openSuccessCallback(res);
					} else {
						// 支持Promise.then
						resolve(res);
					}
				},
			);
			// promise.catch 转角给 onError
			this.onError(openFailCallback || reject);
		});
	}

	onError(errorCallback?: AnyFunction) {
		return new Promise((resolve) => {
			this.socketTask?.onError((res: any) => {
				if (errorCallback) {
					errorCallback(res);
				} else {
					resolve(res);
				}
			});
		});
	}

	onMessage(callback: AnyFunction): void {
		this.socketTask?.onMessage(callback);
	}

	protected send(instance: BaseMessage | string | ArrayBuffer) {
		if (instance instanceof BaseMessage) {
			instance.setSendAt(new Date());
			this.socketTask?.send({
				data: instance.toString(),
				success: () =>
					instance.updateMessageStatus(PresetMessageStatus.SENT),
			});
		} else {
			this.socketTask?.send({ data: instance });
		}
	}

	public close() {
		this.socketTask?.close({});
	}

	public onClose(callback: AnyFunction) {
		this.socketTask?.onClose((res: any) => {
			this.socketConnected = false;
			callback(res);
		});
	}

	public reConnect() {
		this.close();
		this.connect();
	}
}
