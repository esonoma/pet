import { UniversalKeys } from "@/types";
import BaseWebsocketClient from "./BaseWebsocketClient";
import {
	FileMessageModel,
	HeartbeatMessageModel,
	ImageMessageModel,
	TextMessageModel,
	BinaryMessageModel,
	EmojiMessageModel,
} from "./messages";
import { SendMessage } from "./SendMessage";
import { ListenMessage } from "./ListenMessage";
import PresetValidators from "./PresetValidators";
import { isString } from "@/helpers";

export default class WebsocketClient
	extends BaseWebsocketClient
	implements SendMessage, ListenMessage
{
	validators = new PresetValidators();

	// registerDispenser (注册消息分发)
	dispenserRules = {
		[TextMessageModel.dispatchType]: TextMessageModel.registerHookName,
		[ImageMessageModel.dispatchType]: ImageMessageModel.registerHookName,
		[FileMessageModel.dispatchType]: FileMessageModel.registerHookName,
		[HeartbeatMessageModel.dispatchType]:
			HeartbeatMessageModel.registerHookName,
		[BinaryMessageModel.dispatchType]: BinaryMessageModel.registerHookName,
		[EmojiMessageModel.dispatchType]: EmojiMessageModel.registerHookName,
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
	// TODO: 等待实现
	public sendImageMessage(
		form: string,
		to: string | string[],
		data: string | ArrayBuffer,
		// ext?: Record<UniversalKeys, unknown>,
	) {
		this.send(data);
	}

	// sendFileMessage (文件消息)
	// TODO: 等待实现
	public sendFileMessage(
		form: string,
		to: string | string[],
		data: string | ArrayBuffer,
		// ext?: Record<UniversalKeys, unknown>,
	) {
		this.send(data);
	}

	// sendBinaryMessage (二进制消息)
	// TODO: 等待实现
	public sendBinaryMessage(
		from: string,
		to: string | string[],
		data: string | ArrayBuffer,
		// ext?: Record<UniversalKeys, unknown>,
	) {
		this.send(data);
	}

	// emojiMessage (发送Emoji表情)
	public sendEmojiMessage(
		from: string,
		to: string | string[],
		data: string | ArrayBuffer,
		// ext?: Record<UniversalKeys, unknown>,
	) {
		const emoji = new EmojiMessageModel(from, to, data);
		this.send(emoji);
		return emoji;
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
		this.on(TextMessageModel.registerHookName, callback);
	}

	// onBinaryMessage (二进制消息)
	onBinaryMessage(callback: (message: ArrayBuffer) => void) {
		this.on("onBinaryMessage", callback);
	}

	// onImageMessage (图片消息)
	onImageMessage(callback: (message: ImageMessageModel) => void) {
		this.on(ImageMessageModel.registerHookName, callback);
	}

	// onFileMessage (文件消息)
	onFileMessage(callback: (message: FileMessageModel) => void) {
		this.on(FileMessageModel.registerHookName, callback);
	}

	// onHeartbeatMessage (心跳消息)
	onHeartbeatMessage(callback: (message: HeartbeatMessageModel) => void) {
		this.on(HeartbeatMessageModel.registerHookName, callback);
	}

	// onEmojiMessage (Emoji表情消息)
	onEmojiMessage(callback: (message: EmojiMessageModel) => void) {
		this.on(EmojiMessageModel.registerHookName, callback);
	}
}
