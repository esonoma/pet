import { ref } from "vue";
import { createAccountService } from "@domains/user.service";

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
