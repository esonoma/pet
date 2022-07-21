import { Eventemitter } from "../../helpers";
import { AnyFunction } from "../../types/utils";
import { PresetWebsocketValidator } from "./PresetWebsocketValidator";

class Websocket extends Eventemitter<AnyFunction> {
	public configs: UniApp.ConnectSocketOption;

	public validators = new PresetWebsocketValidator();

	public socketTask: UniApp.SocketTask | null = null;

	public socketConnected = false;

	constructor(configs: UniApp.ConnectSocketOption) {
		super();
		this.configs = configs;
		// this.createHook();
	}

	// private createHook() {
	// 	this.on("connect", (res) => {
	// 		// console.log("connect", res);
	// 	});
	// }

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
	}

	open() {
		this.socketTask?.onOpen((res: UniApp.OnSocketOpenCallbackResult) => {
			console.log("onOpen", res);
			this.socketConnected = true;
		});
	}

	protected onMessage(callback: AnyFunction): void {
		this.socketTask?.onMessage(
			(res: UniApp.OnSocketMessageCallbackResult) => {
				const isLegitimate = this.validators.isLegitimate(res);
				callback(res, isLegitimate);
			},
		);
	}

	public onTextMessage(callback: AnyFunction) {
		this.onMessage((res) => {
			if (res.data.indexOf("text") === 0) {
				callback(res);
			}
		});
	}

	public onBinaryMessage(callback: AnyFunction) {
		this.onMessage((res) => {
			if (res.data.indexOf("binary") === 0) {
				callback(res);
			}
		});
	}

	public onImageMessage(callback: AnyFunction) {
		this.onMessage((res) => {
			if (res.data.indexOf("image") === 0) {
				callback(res);
			}
		});
	}

	public onFileMessage(callback: AnyFunction) {
		this.onMessage((res) => {
			if (res.data.indexOf("file") === 0) {
				callback(res);
			}
		});
	}

	protected send(data: string | ArrayBuffer) {
		this.socketTask?.send({ data });
	}

	public close() {
		this.socketTask?.close({});
	}

	public onClose(callback: AnyFunction) {
		this.socketTask?.onClose((res: any) => {
			console.log("onClose", res);
			this.socketConnected = false;
			callback(res);
		});
	}

	public reConnect() {
		this.close();
		this.connect();
	}

	public sendHeartbeat() {
		this.send("heartbeat");
	}

	public sendTextMessage(data: string) {
		this.send(data);
	}

	public sendBinaryMessage(data: ArrayBuffer) {
		this.send(data);
	}

	public sendImageMessage(data: string) {
		this.send(data);
	}

	public sendFileMessage(data: string) {
		this.send(data);
	}
}

export default Websocket;
