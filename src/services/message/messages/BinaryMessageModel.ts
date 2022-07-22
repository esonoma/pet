import { BaseMessage } from "./BaseMessage";

export class BinaryMessageModel extends BaseMessage {
	type = "binary";

	static dispatchType = "binary";

	static registerHookName = "onBinaryMessage";
}
