import { BaseMessage } from "./BaseMessage";

export class SessionMessageModel extends BaseMessage {
	public static readonly dispatchType = "session";

	public static readonly registerHookName = "sessionMessage";

	type = "session";
}
