import {
	EmojiMessageModel,
	FileMessageModel,
	HeartbeatMessageModel,
	ImageMessageModel,
	SessionMessageModel,
	TextMessageModel,
} from "./messages";

export interface ListenMessage {
	listenable: boolean;
	dispensers?: () => void;

	onTextMessage?: (callback: (message?: TextMessageModel) => void) => void;
	onBinaryMessage?: (callback: (message?: ArrayBuffer) => void) => void;
	onImageMessage?: (callback: (message?: ImageMessageModel) => void) => void;
	onFileMessage?: (callback: (message?: FileMessageModel) => void) => void;
	onHeartbeatMessage?: (
		callback: (message?: HeartbeatMessageModel) => void,
	) => void;

	onEmojiMessage?: (callback: (message?: EmojiMessageModel) => void) => void;

	onSessionMessage?: (
		callback: (message?: SessionMessageModel) => void,
	) => void;
}
