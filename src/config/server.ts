const appRuntimeEnv = import.meta.env;

export const globalAPITimeout = 10 * 1000;

// note: 这只是本地开发的时候使用的地址
// --------------------------------------------------
// 本地开发你可能在自己的设备上进行, 那么使用 localhost 即可
// 如果是不同同学之间的协作, 也同样提供一个可访问的服务地址即可

// 为什么这样做?
// 可以减少将真实的服务地址硬编码在代码中
// 如此设计以后：
// 1. 即使是真实的dev环境, 我们也可以在 CI 中进行动态的控制
// 2. 即使一些居心叵测的同学拿到我们的代码，也不一定可以访问到我们的服务
// export const LocalServer = "https://localhost:8090";
export const LocalServer = "http://petapp.nat300.top/"; // 使用内网穿透服务转发到真实的服务地址

// --------------------------------------------------
// 默认的 PROD 只能证明你是通过 build 脚本进行构建的
// 并不意味着你访问的服务也是 PROD 环境
export function isBuildProd() {
	return appRuntimeEnv.PROD;
}
export function isBuildDev() {
	return appRuntimeEnv.DEV;
}

// VITE_IS_PROD_ENV 是业务层面的环境标识
// 是由 构建生产环境 时候的 CI 进行写入的, 如果为 true, 则表示当前是一定是生产环境
// 本地开发时候和dev环境时候, 值为 false
export function isServerProd() {
	return appRuntimeEnv.VITE_IS_PROD_ENV === "true";
}
export function isServerDev() {
	return appRuntimeEnv.VITE_IS_PROD_ENV === "false";
}

// 是否是通过 CI 构建的环境, 可以标识使用什么环境的服务
export function isBuildThroughCI() {
	return appRuntimeEnv.VITE_IS_CI_BUILD === "true";
}

// 只要是通过 CI 环境进行构建的, 都会在统一的替换VITE_SERVICE_URL的地址
// 这意味着：本地开发并不需要知道真实的服务地址是什么
export function getServerURL(): string {
	if (isBuildThroughCI()) {
		return appRuntimeEnv.VITE_SERVICE_URL;
	}
	return LocalServer;
}
