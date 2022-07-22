import { BaseMessage } from "./BaseMessage";

export class FileMessageModel extends BaseMessage {
	type = "file";

	static dispatchType = "file";

	static registerHookName = "onFileMessage";
}
