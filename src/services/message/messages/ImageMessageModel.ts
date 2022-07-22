import { BaseMessage } from "./BaseMessage";

export class ImageMessageModel extends BaseMessage {
	type = "image";

	static dispatchType = "image";

	static registerHookName = "onImageMessage";
}
