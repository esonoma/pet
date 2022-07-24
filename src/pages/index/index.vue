<template>
	<app-header />
	<text> {{ $t("message.welcome") }} </text>
	<view>
		<text>MyChatID: {{ userChatID }}</text>
		<view>
			<label for="targetChatID" class="target-chat-label">
				<text>TargetChatID:</text>
				<input
					type="text"
					placeholder="请输入目标聊天ID"
					class="target-chat-input"
					v-model="targetChatID"
					required
					focus
				/>
			</label>
		</view>
		<view class="message-container">
			<view v-for="message in messages" :key="message.sendAt">
				<view
					:class="
						message.form === userChatID
							? 'message-self'
							: 'message-other'
					"
					>{{ message.payload }}</view
				>
			</view>
		</view>
	</view>

	<view class="message-input-container">
		<textarea
			class="message-input"
			placeholder="请输入消息"
			v-model="message"
		></textarea>
		<button class="message-send-button" @click="sendMessage">发送</button>
	</view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import WebsocketClient from "@message/WebsocketClient";
import appHeader from "@components/app-header/index.vue";

const userChatID = ref("");
const targetChatID = ref("");
const message = ref("");

const messages = reactive([]);

const socketClient = new WebsocketClient({
	url: "wss://a93e-222-211-237-49.jp.ngrok.io",
}).connect();
socketClient.open().then(() => socketClient.dispensers());

// session message
socketClient.onSessionMessage((data) => {
	userChatID.value = data.payload.id;
});
socketClient.onTextMessage((data) => {
	messages.push(data);
});

function sendMessage() {
	if (!targetChatID.value) {
		uni.showModal({
			title: "目标用户未填写",
		});
		return;
	}

	socketClient.sendTextMessage(
		userChatID.value,
		targetChatID.value,
		message.value,
	);
	message.value = "";
}
</script>

<style scoped lang="less">
.target-chat-label {
	display: flex;
	align-items: center;

	.target-chat-input {
		// flex: 1;
		border: none;
		border-radius: 4rpx;
		padding: 4rpx 8rpx;
		font-size: 14px;
		color: red;
		font-weight: 500;
		background-color: #fff;
	}
}
.message-container {
	margin-top: 20rpx;
	height: 1200rpx;
	background-color: rgb(245, 245, 245);
}

.message-input-container {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 140rpx;
	padding: 0 20rpx;

	display: flex;

	.message-input {
		// flex: 1;
		border: none;
		overflow-y: auto;
		border-radius: 4rpx;
		padding: 4rpx 8rpx;
		font-size: 14px;
		color: rgb(85, 84, 84);
		font-weight: 500;
		background-color: #fff;
	}

	.message-send-button {
		background-color: rgb(229, 239, 230);
		border: none;
		outline: none;
		display: flex;
		align-items: center;
		line-height: 0;
		font-size: 15px;
		width: 60px;

		::after {
			border: none;
			outline: none;
		}
	}
}

.message-self {
	display: inline-block;
	// width: 100%;
	padding: 10rpx 20rpx;
	font-size: 14px;
	// font-weight: 600;
	color: rgb(252, 252, 252);
	background-color: rgb(168, 143, 251);
	border-radius: 0px 16px 2px 0px;
	margin: 5px 30px 5px 15px;
	word-wrap: break-word;
	word-break: break-all;
}

.message-other {
	display: inline-block;
	// width: 100%;
	padding: 10rpx 20rpx;
	font-size: 14px;
	// font-weight: 600;
	color: rgb(252, 252, 252);
	background-color: rgb(251, 143, 148);
	border-radius: 0px 16px 2px 0px;
	margin: 5px 30px 5px 15px;
	word-wrap: break-word;
	word-break: break-all;
}
</style>
