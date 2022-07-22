import { UniversalKeys } from "../../types";
import BaseWebsocketClient from "./BaseWebsocketClient";
import {
	FileMessageModel,
	HeartbeatMessageModel,
	ImageMessageModel,
	TextMessageModel,
} from "./messages";
import { SendMessage } from "./SendMessage";
import { ListenMessage } from "./ListenMessage";
import PresetValidators from "./PresetValidators";
import { isString } from "../../helpers";

export default class WebsocketClient
	extends BaseWebsocketClient
	implements SendMessage, ListenMessage
{
	validators = new PresetValidators();

	dispenserRules = {
		text: "onTextMessage",
		image: "onImageMessage",
		file: "onFileMessage",
		binary: "onBinaryMessage",
		heartbeat: "onHeartbeatMessage",
	};

	// SendMessage 提供的标识符
	sendable = true;

	// ListenMessage 提供的标识符
	listenable = true;

	/**
	 * SendMessage
	 */

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

	// sendImageMessage (图片消息)
	public sendImageMessage(
		form: string,
		to: string | string[],
		data: string | ArrayBuffer,
		// ext?: Record<UniversalKeys, unknown>,
	) {
		this.send(data);
	}

	// sendFileMessage (文件消息)
	public sendFileMessage(
		form: string,
		to: string | string[],
		data: string | ArrayBuffer,
		// ext?: Record<UniversalKeys, unknown>,
	) {
		this.send(data);
	}

	// sendBinaryMessage (二进制消息)
	public sendBinaryMessage(
		from: string,
		to: string | string[],
		data: string | ArrayBuffer,
		// ext?: Record<UniversalKeys, unknown>,
	) {
		this.send(data);
	}

	/**
	 * ListenMessage
	 */

	// 消息分发(分发到各个消息类型的回调)
	dispensers() {
		this.onMessage((message: UniApp.OnSocketMessageCallbackResult) => {
			if (this.validators.isLegitimate(message)) {
				const messageObject = this.validators.parser(message, true);
				if (isString(messageObject.type)) {
					const type =
						messageObject.type as keyof typeof this.dispenserRules;
					this.emit(this.dispenserRules[type], messageObject);
				}
			}
		});
	}

	// onTextMessage (文本消息)
	onTextMessage(callback: (message: TextMessageModel) => void) {
		this.on("onTextMessage", callback);
	}

	// onBinaryMessage (二进制消息)
	onBinaryMessage(callback: (message: ArrayBuffer) => void) {
		this.on("onBinaryMessage", callback);
	}

	// onImageMessage (图片消息)
	onImageMessage(callback: (message: ImageMessageModel) => void) {
		this.on("onImageMessage", callback);
	}

	// onFileMessage (文件消息)
	onFileMessage(callback: (message: FileMessageModel) => void) {
		this.on("onFileMessage", callback);
	}

	// onHeartbeatMessage (心跳消息)
	onHeartbeatMessage(callback: (message: HeartbeatMessageModel) => void) {
		this.on("onHeartbeatMessage", callback);
	}
}
