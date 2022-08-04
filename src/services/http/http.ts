import axios from "axios";
import setupDefaultRequestInterceptor from "./interceptors/request";
import setupDefaultResponseInterceptor from "./interceptors/response";
import { getServerURL, globalAPITimeout } from "@/config";

// 需要将一些取消的方法提供给业务调用
export { applyCancelId, applyCancelRequest } from "./interceptors/cancel";

const axiosInstance = axios.create({
	// withCredentials: true,
	baseURL: getServerURL(),
	headers: {
		timeout: globalAPITimeout,
		// "Content-Type": "application/json",
	},
});

// Setup default request/response interceptor
axiosInstance.interceptors.request.use(setupDefaultRequestInterceptor);
axiosInstance.interceptors.response.use(setupDefaultResponseInterceptor);
export default axiosInstance;
