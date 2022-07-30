import { AxiosRequestConfig } from "axios";

// type <-> Content-Type
const ContentTypeMaps = {
	json: "application/json",
	form: "application/x-www-form-urlencoded",
	text: "text/plain",
	multipart: "multipart/form-data",
	file: "application/octet-stream",
};

export interface IContentType {
	type?: keyof typeof ContentTypeMaps;
}
export interface AxiosRequestConfigWithCustomHeaders
	extends AxiosRequestConfig,
		IContentType {}

export default function setupContentType<
	RequestConfig extends AxiosRequestConfigWithCustomHeaders = AxiosRequestConfigWithCustomHeaders,
>(config: RequestConfig): void {
	// user Content-Type
	if (config.headers?.["Content-Type"]) {
		return;
	}

	// 设置了config.type
	if (config.type && config.headers) {
		config.headers = {
			...config.headers,
			"Content-Type": getContentType(config.type),
		};
	}

	if (config.headers && !config.headers?.["Content-type"] && !config.type) {
		config.headers = {
			...config.headers,
			"Content-Type": getContentType("json"),
		};
	}
}

function getContentType(type: keyof typeof ContentTypeMaps): string {
	return ContentTypeMaps[type] || ContentTypeMaps.json;
}
