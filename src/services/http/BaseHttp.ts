import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	CancelTokenSource,
} from "axios";
import Queue from "@/helpers/Queue";
import {
	createUuid,
	deleteProperty,
	hasOwnProperty,
	setProperty,
} from "@/helpers";

export interface BaseHttpOptions {
	immediate?: boolean;
	queue?: boolean;
}
const defaultBaseHttpOptions: BaseHttpOptions = {
	immediate: false,
	queue: true,
};

function createCancelSource() {
	return axios.CancelToken.source();
}

function getRequestSingle() {
	return createUuid();
}

export default class BaseHttp {
	queue: Queue = new Queue();

	cancelQueue = new Map<string, CancelTokenSource>();

	retryQueue = new Map<string, AxiosRequestConfig>();

	instance: AxiosInstance;

	options: AxiosRequestConfig;

	headers: AxiosRequestConfig["headers"] = {};

	constructor(
		userAxiosOptions?: AxiosRequestConfig,
		options: BaseHttpOptions = defaultBaseHttpOptions,
	) {
		this.prepare(userAxiosOptions);
		this.init(options);
	}

	private init(options: BaseHttpOptions) {
		if (options.immediate) {
			this.instance = this.createInstance();
		}
	}

	private prepare(userAxiosOptions?: AxiosRequestConfig): void {
		if (userAxiosOptions) {
			this.options = userAxiosOptions;
			if (userAxiosOptions?.headers) {
				this.headers = userAxiosOptions.headers;
			}
		}
	}

	public deleteHeader(key: string) {
		deleteProperty(this.headers, key);
	}

	public addHeader(
		key: string,
		value: string | number | boolean,
		overlaySame?: boolean,
	): void {
		if (hasOwnProperty(this.headers, key)) {
			if (overlaySame) {
				setProperty(this.headers, key, value);
			}
		} else {
			setProperty(this.headers, key, value);
		}
	}

	public createInstance(): AxiosInstance {
		return axios.create(this.options);
	}

	// 添加必要的请求头,交由user层实现

	// TODO: implement
	// 添加cancelToken
	// 添加重试支持
	public requestInterceptors(config: AxiosRequestConfig<any>) {
		const cancelSource = createCancelSource();
		const single =
			(config?.headers?.cancelSingle as string) || getRequestSingle();

		const newConfig = {
			...config,
			headers: {
				...config.headers,
				cancelToken: cancelSource.token,
				cancelSingle: single,
			},
		};

		this.cancelQueue.set(single, cancelSource);
		// this.retryQueue.set(single, config);

		return newConfig;
	}

	// public responseInterceptors(response: AxiosResponse<any>) {}

	public cancel(requestSingle: string, cancelMessage: string) {
		return this.cancelQueue.get(requestSingle)?.cancel(cancelMessage);
	}

	// public retry() {}
}
