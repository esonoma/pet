import { BaseMessage } from "./BaseMessage";

export class HeartbeatMessageModel extends BaseMessage {
	type = "heartbeat";

	static dispatchType = "heartbeat";

	static registerHookName = "onHeartbeatMessage";

	constructor(public form: string) {
		super();
		this.to = "@WebsocketServer";
		this.payload = "ping";
	}
}
