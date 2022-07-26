<template>
	<status-bar />
	<app-header text="Message" page="Home" />
	<view class="message-content">
		<view
			class="message-item-container"
			v-for="message in messages"
			:key="message.id"
			:class="{
				'is-self-message': true,
			}"
		>
			{{ message.payload }}
		</view>
	</view>
</template>

<script lang="ts" setup>
import statusBar from "@components/status-bar/index.vue";
import appHeader from "@components/app-header/index.vue";
import { onMounted, reactive } from "vue";

import { getMessages } from "@domains/message.service";

const messages = reactive([]);
onMounted(async () => {
	const data = await getMessages();
	messages.push(...data.list);
});
</script>
<style scoped lang="scss">
.message-content {
	padding: 0rpx 30rpx;
}
.is-self-message {
	text-align: right;
}
</style>
