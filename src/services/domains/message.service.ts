import http from "@http/index";
import { onMounted, reactive } from "vue";

/**
 * 这里只是做一个案例说明：
 *
 * 即使是在typescript中，我们也可以利用基本的继承原理来编写易于维护的类型定义。
 * XXX: 下方定义需要进行抽离, 放置于其他地方
 */
interface GetDataTimeOptions {
	startDateTime?: [Date, Date];
	endDateTime?: [Date, Date];
}
interface BaseGetDataOptions {
	state?: string;
	limit?: number;
	offset?: number;
	sort?: string;
	order?: string;
}
export interface GetMessagesOptions
	extends GetDataTimeOptions,
		BaseGetDataOptions {
	form: string;
	to: string;
	isRead?: boolean;
	isDeleted?: boolean;
	isStarred?: boolean;
	isRichText?: boolean;
	isFile?: string;
	self?: string;
}

interface Message extends GetMessagesOptions {
	id: string;
	payload: any;
	createdAt: Date;
	updatedAt: Date;
}

export function getMessages(messageOptions: GetMessagesOptions) {
	// XXX: 使用GET？
	return http.post("/messages", messageOptions);
}

export function useGetMessagesWithState(
	initMessageOptions: GetMessagesOptions,
) {
	const lastMessageOptions = reactive(initMessageOptions);
	const messages = reactive<Message[]>([]);
	let metaInfoResponse = reactive<any>({});

	onMounted(() => {
		getMessageAndSave(lastMessageOptions);
	});

	const getMessageAndSave = async (option: GetMessagesOptions) => {
		const response = await getMessages(option);
		messages.push(response?.data);
		metaInfoResponse = response;
	};

	const loadNextPage = () => {
		if (lastMessageOptions.offset) {
			lastMessageOptions.offset += 1;
			getMessageAndSave(lastMessageOptions);
		}
	};

	return {
		messages,
		loadNextPage,
		initMessageOptions,
		lastMessageOptions,
		metaInfoResponse,
	};
}

export function getMessage() {
	return http.get("/messages");
}
