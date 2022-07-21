import { Eventemitter } from "../../helpers";
import { AnyFunction, UniversalKeys } from "../../types/utils";
import { PresetWebsocketValidator } from "./PresetWebsocketValidator";
import {
	TextMessageModel,
	HeartbeatMessageModel,
	PresetMessageStatus,
	BaseMessage,
} from "./messages";

class Websocket extends Eventemitter<AnyFunction> {
	public configs: UniApp.ConnectSocketOption;

	public validators = new PresetWebsocketValidator();

	public socketTask: UniApp.SocketTask | null = null;

	public socketConnected = false;

	constructor(configs: UniApp.ConnectSocketOption) {
		super();
		this.configs = configs;
		// this.createHook();
		this.connect();
		// this.open();
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

	open(callback: AnyFunction) {
		this.socketTask?.onOpen((res: UniApp.OnSocketOpenCallbackResult) => {
			console.log("onOpen", res);
			this.socketConnected = true;
			callback(res);
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
			console.log("onClose", res);
			this.socketConnected = false;
			callback(res);
		});
	}

	public reConnect() {
		this.close();
		this.connect();
	}

	// sendHeartbeatMessage (心跳消息)
	public sendHeartbeat(form: string) {
		const heartbeat = new HeartbeatMessageModel(form);
		this.send(heartbeat);
		return heartbeat;
	}

	// sendTextMessage (文本消息)
	public sendTextMessage(
		form: string,
		to: string | string[],
		data: string,
		ext?: Record<UniversalKeys, unknown>,
	) {
		const textMessage = new TextMessageModel(form, to, data, ext);
		this.send(textMessage);
		return textMessage;
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

// example
const websocket = new Websocket({
	url: "wss://dbe1-222-211-237-49.jp.ngrok.io",
});
websocket.open(() => {
	websocket.sendTextMessage("1658424567427", "1658424567203", "hello");
	console.log("websocket open", websocket.socketConnected, websocket);
});
