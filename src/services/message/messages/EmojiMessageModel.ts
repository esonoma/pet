import { BaseMessage } from "./BaseMessage";

export class EmojiMessageModel extends BaseMessage {
	type = "emoji";

	static dispatchType = "emoji";

	static registerHookName = "emojiMessage";

	constructor(
		public from: string,
		public to: string | string[],
		data: string | ArrayBuffer,
		// ext?: Record<UniversalKeys, unknown>,
	) {
		super();
		this.payload = data;
	}
}
