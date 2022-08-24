import { AxiosRequestConfig } from "axios";
import setupCancelController from "./cancel";
import { setupAuthenticationToken } from "./permissions";
import setupContentType from "./contentType";

export default function setupDefaultRequestInterceptors(
	config: AxiosRequestConfig,
): AxiosRequestConfig {
	setupAuthenticationToken(config);
	setupCancelController(config);
	setupContentType(config);

	// TODO: startLoading
	return config;
}

export function setupDefaultRequestRejectedInterceptor(
	error: Error,
): Promise<Error> {
	return Promise.reject(error);
}
