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
				{{ data }}
			</text>
		</view>
	</view>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useCreateAccount } from "@/hooks/userHooks";

const { data, run } = useCreateAccount();
const username = ref("test_username");

function createAccount() {
	run({
		username: username.value,
		password: "123456",
		email: `${username.value}@petapp.com`,
	});
}
</script>
