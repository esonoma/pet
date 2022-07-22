import { UniversalKeys } from "../../../types";
import { BaseMessage } from "./BaseMessage";

export class TextMessageModel extends BaseMessage {
	type = "text";

	static dispatchType = "text";

	static registerHookName = "onTextMessage";

	constructor(
		public form: string,
		public to: string | string[],
		public message: string,
		public ext?: Record<UniversalKeys, unknown>,
	) {
		super();
		this.payload = message;
	}
}
