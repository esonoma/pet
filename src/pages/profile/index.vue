<template>
	<view>
		<text>Profile</text>
	</view>
	<input type="text" name="profileUsername" v-model="username" />
	<view>
		<button type="button" @tap="createAccount">
			<text>Create a new account </text>
		</button>
		<view>
			<text>
				{{ profile }}
			</text>
		</view>
	</view>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { createAccountService } from "@/services/domains/user.service";

const profile = ref({});
const username = ref("test_username");

function createAccount() {
	createAccountService({
		username: username.value,
		password: "123456",
		email: `${username.value}@petapp.com`,
	}).then((response) => {
		profile.value = response.data;
	});
}
</script>
