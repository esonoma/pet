<template>
	<app-header />
	<view>
		<text> {{ $t("message.welcome") }} </text>
	</view>

	<uni-card>
		<text
			>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text
		>
	</uni-card>

	<view class="content">
		<view class="text-area">
			<text class="title"> {{ login.username }}</text>
		</view>
		<button type="button" @click="startLogin">Login</button>
		<button type="button" @click="loginOut">Logout</button>
	</view>
</template>

<script setup lang="ts">
// example
import "../../services/message/WebsocketClient";

import appHeader from "../../components/app-header/index.vue";
import { useLogin } from "../../store/login";

const login = useLogin();

function startLogin() {
	login.setLoginUser("XMing");
}
function loginOut() {
	login.logout();
	uni.navigateTo({
		url: "/pages/test/index",
	});
}
</script>

<style lang="less">
.title {
	font-size: 20px;
	color: red;
}
</style>
