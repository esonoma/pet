<template>
	<view class="profile-container">
		<status-bar />
		<app-header text="Profile" page="Profile" />

		<view class="profile" v-if="loginResult.uid">
			<text> Hello: {{ loginResult.username }} </text>
			<br />
			<text> Uid: {{ loginResult.uid }} </text>
		</view>

		<input
			type="text"
			name="profileUsername"
			v-model="username"
			placeholder="Please input a username"
			style="
				padding: 20rpx 30rpx;
				border-radius: 4px;
				border: 1px solid salmon;
			"
		/>
		<text v-if="createResult.code === 1" style="color: red">{{
			createResult.msg
		}}</text>

		<view class="profile-btn-actions">
			<button type="button" @tap="createAccount">
				<text>Create New Account </text>
			</button>
			<button
				type="button"
				@tap="
					runLogin({
						username,
						password: '123456',
					})
				"
			>
				<text>Login Account</text>
			</button>

			<button type="button" @tap="getProfileService">
				<text>GetProfile</text>
			</button>

			<button type="button" @tap="logoutService">Logout</button>
			<button type="button" @tap="getBuckets">GetBuckets</button>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import statusBar from "@components/status-bar/index.vue";
import appHeader from "@components/app-header/index.vue";

import { getProfileService, logoutService } from "@domains/user.service";
import { getBuckets } from "@domains/file.service";
import { useCreateAccount, useLogin } from "@/hooks/userHooks";

const username = ref("");

const { data: createResult, run: runCreateAccount } = useCreateAccount();
const { data: loginResult, run: runLogin } = useLogin();

function createAccount() {
	if (username.value) {
		runCreateAccount({
			username: username.value,
			password: "123456",
			email: `${username.value}@petapp.com`,
		});
	}
}
</script>

<style scoped lang="scss">
.profile-container {
	padding: 0rpx 30rpx;

	.profile {
		margin: 30rpx 0;
		font-size: 20px;
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	}

	.profile-btn-actions {
		margin-top: 60rpx;
		button {
			margin-bottom: 30rpx;
			height: 120rpx;
			border-radius: 60rpx;
			line-height: 120rpx;

			&::after {
				border: none;
			}
		}
	}
}
</style>
