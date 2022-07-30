import { AxiosResponse } from "axios";
import { validateIsCancelRequestAndRemove } from "./cancel";

export default function setupDefaultResponseInterceptors(
	response: AxiosResponse,
): AxiosResponse {
	validateIsCancelRequestAndRemove(response.config);

	// TODO: stopLoading
	/**
	 * TODO:standardized Response Data
	 */
	return response;
}

export function setupDefaultResponseRejectedInterceptor(
	error: any,
): Promise<Error> {
	// console.log("setupDefaultResponseRejectedInterceptor", error);
	// validateIsCancelRequestAndRemove(error.config);
	return Promise.reject(error);
}
