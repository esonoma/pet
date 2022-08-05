import { ref } from "vue";
import { createAccountService, loginService } from "@domains/user.service";

export function useCreateAccount() {
	const createAccountResult = ref({});
	return {
		data: createAccountResult,
		run: async (accountData: {
			username: string;
			password: string;
			email: string;
		}) => {
			createAccountResult.value = await (
				await createAccountService(accountData)
			).data;
		},
		clear() {
			createAccountResult.value = {};
		},
	};
}

export function useLogin() {
	const loginResult = ref({});
	return {
		data: loginResult,
		run: async (loginData: { username: string; password: string }) => {
			loginResult.value = await (await loginService(loginData)).data;
		},
	};
}
