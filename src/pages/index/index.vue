<template>
	<app-header />
	<view>
		<text>Home</text>
		<text> {{ $t("message.welcome") }} </text>
	</view>
</template>

<script setup lang="ts">
// import { reactive } from "vue";
import appHeader from "@components/app-header/index.vue";
// import WebsocketClient from "@message/WebsocketClient";

// const messages = reactive<string[]>([]);
// const websocketClient = new WebsocketClient({
// 	url: "wss://ad24-222-211-237-49.jp.ngrok.io",
// }).connect();
// websocketClient.open().then(() => {
// 	websocketClient.dispensers();
// });

// websocketClient.onTextMessage((message) => {
// 	messages.push(JSON.stringify(message));
// });
</script>

<style lang="less">
.title {
	font-size: 20px;
	color: red;
}
</style>
