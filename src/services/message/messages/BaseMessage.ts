import { UniversalKeys } from "../../../types";

export enum PresetMessageStatus {
	CREATE = "create",
	PENDING = "pending",
	SENT = "sent",
	DELIVERED = "delivered",
	READ = "read",
	FAILED = "failed",
	UNKNOWN = "unknown",
}

export abstract class BaseMessage<
	MessageTypes extends UniversalKeys = UniversalKeys,
	MessageStatus extends UniversalKeys = UniversalKeys,
> {
	abstract type: string | MessageTypes;

	status: PresetMessageStatus | MessageStatus = PresetMessageStatus.PENDING;

	form: string;

	to: string | string[] | "@WebsocketServer";

	ext?: Record<UniversalKeys, unknown>;

	payload?: any = {};

	createdAt: Date = new Date();

	sendAt: Date | null = null;

	setSendAt(sendAt: Date) {
		this.sendAt = sendAt;
	}

	updateMessageStatus(status: PresetMessageStatus | MessageStatus) {
		this.status = status;
	}

	isCurrentMessage(message: BaseMessage) {
		return message.type === this.type;
	}

	getMeta() {
		return {
			form: this.form,
			to: this.to,
			type: this.type,
			status: this.status,
			createdAt: this.createdAt,
			sendAt: this.sendAt,
			payload: this.payload,
			ext: this.ext,
		};
	}

	toString() {
		return JSON.stringify(this.getMeta());
	}

	parserString(str: string) {
		return JSON.parse(str);
	}
}
