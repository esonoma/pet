/**
 * Event Source
 * ref: https://developer.mozilla.org/zh-CN/docs/Web/API/EventSource
 *
 * 原 EventSource 只实现了服务端像客户端推送数据EventSource
 * 该实例会对 HTTP 服务开启一个持久化的连接，以text/event-stream 格式发送事件
 * 会一直保持开启直到被要求关闭
 *
 * 客户端可以结合普通的Http来发送数据, 服务端结合EventSource来推送
 * 模拟双向通讯的过程, 可以用于消息通知等场景
 *
 * @class EventStream
 * @extends {EventSource, Emitter}
 * @implements {SendMessage} 使用 Http 包装 SendMessage
 * @implements {ListenMessage} EventSource onMessage
 * @implements {CloseMessage} EventSource onClose
 * @implements {ErrorMessage} EventSource onError
 * @implements {OpenMessage} EventSource onOpen
 */
import { Eventemitter } from "@/helpers";
import { AnyFunction } from "@/types";
import http from "@/services/http";

export interface EventStreamOptions extends EventSourceInit {
	sendURL?: string;
}

export const DefaultMessageServerPath = "/api/message/send";
export class EventStream<
	SendModelType = any,
	SendReturnValueModel = any,
> extends EventSource {
	public sendURL = DefaultMessageServerPath;

	constructor(url: string | URL, options?: EventStreamOptions) {
		const { sendURL } = options || {};
		super(url, options);
		if (sendURL) {
			this.sendURL = sendURL;
		}
	}

	public emitters: Eventemitter = new Eventemitter<AnyFunction>();

	sendMessage<
		MessageBodyDefine = SendModelType,
		SendMessageReturnValueModel = SendReturnValueModel,
	>(payload: MessageBodyDefine): Promise<SendMessageReturnValueModel> {
		// 发送消息
		return http.post(this.sendURL as string, payload);
	}
}
