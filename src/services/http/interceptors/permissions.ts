import { AxiosRequestConfig } from "axios";
import { getAuthenticationToken } from "@/common/auth";
import { isObject } from "@/helpers";

export function setupAuthenticationToken(config: AxiosRequestConfig): void {
	// user Authorization
	if (config.headers?.Authorization) {
		return;
	}
	const token = getAuthenticationToken();
	if (token && config.headers && isObject(config.headers)) {
		config.headers.Authorization = `Bearer ${token}`;
	}
}
