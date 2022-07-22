// Notes: 模拟用户service
export function getUserInfoService() {
	return Promise.resolve({
		name: "admin",
		isNewUser: false,
	});
}
