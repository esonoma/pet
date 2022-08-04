import http from "@http/index";

// Notes: 模拟用户service
export function getUserInfoService() {
	return Promise.resolve({
		name: "admin",
		isNewUser: false,
	});
}

export function createAccountService(accountData: {
	username: string;
	password: string;
	email: string;
}) {
	return http.post("/users", accountData);
}
