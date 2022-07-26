<template>
	<view class="top">
		123
		<!-- <image class src="../../static/logo.png"></image> -->
	</view>

	<view class="login-form">
		<uni-easyinput
			prefixIcon="person-filled"
			v-model="obj.userId"
			placeholder="请输入账号"
		></uni-easyinput>
		<uni-easyinput
			type="password"
			prefixIcon="locked-filled"
			v-model="obj.passWord"
			placeholder="请输入密码"
		/>
		<view class="to-register" @click="gotoRegester"
			>还没有账号？去注册></view
		>
	</view>

	<view>
		<button class="common-btn login-btn" @click="login">登录</button>
		<button class="common-btn goto-home-btn" @click="gotoHome">
			回到首页
		</button>
	</view>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const login = () => 0;
const gotoHome = () => {
	uni.redirectTo({ url: "/pages/index/index" });
};

const gotoRegester = () => {
	uni.redirectTo({ url: "/pages/guide/guide" });
};

const obj = reactive({
	userId: "",
	passWord: "",
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
