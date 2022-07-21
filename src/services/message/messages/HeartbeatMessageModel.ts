import { BaseMessage } from "./BaseMessage";

export class HeartbeatMessageModel extends BaseMessage {
	type = "heartbeat";

	constructor(public form: string) {
		super();
		this.to = "@WebsocketServer";
		this.payload = "ping";
	}
}
