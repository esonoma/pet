import { defineStore } from "pinia";

const LoginPiniaStoreID = Symbol.for("login");

export const useLogin = defineStore({
	id: LoginPiniaStoreID.toString(), // string
	state: () => ({
		username: uni.getStorageSync("username") ?? "",
	}),
	actions: {
		setLoginUser(username: string) {
			this.username = username;
		},
		logout() {
			uni.clearStorage();
			this.username = "";
		},
	},
});
