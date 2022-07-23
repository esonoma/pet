import { UniversalKeys } from "@/types";
import {
	FileMessageModel,
	HeartbeatMessageModel,
	ImageMessageModel,
	TextMessageModel,
} from "./messages";

export interface SendMessage {
	sendable: boolean;

	sendTextMessage?: (
		form: string,
		to: string | string[],
		data: string,
		ext?: Record<UniversalKeys, unknown>,
	) => TextMessageModel | void;

	sendBinaryMessage?: (
		form: string,
		to: string | string[],
		data: string | ArrayBuffer,
		ext?: Record<UniversalKeys, unknown>,
	) => HeartbeatMessageModel | void;

	sendImageMessage?: (
		form: string,
		to: string | string[],
		data: string | ArrayBuffer,
		ext?: Record<UniversalKeys, unknown>,
	) => ImageMessageModel | void;

	sendFileMessage?: (
		form: string,
		to: string | string[],
		data: string | ArrayBuffer,
		ext?: Record<UniversalKeys, unknown>,
	) => FileMessageModel | void;

	sendEmojiMessage?: (
		form: string,
		to: string | string[],
		data: string | ArrayBuffer,
		ext?: Record<UniversalKeys, unknown>,
	) => void;
}
