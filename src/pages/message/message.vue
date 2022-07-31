<template>
	<view class="message-content" ref="messageContent">
		<view
			class="message-item"
			v-for="message in messages"
			:key="message.id"
		>
			<text>
				{{ message.payload }}
			</text>
		</view>
		<view class="fakeMarkNode" ref="fakeMarkNode">
			<text> {{ lastMessageOptions.offset }} Loading ...</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { useGetMessagesWithState } from "@domains/message.service";
import { onMounted, onUnmounted, ref } from "vue";

const { messages, loadNextPage, lastMessageOptions } = useGetMessagesWithState({
	form: "userA",
	to: "userB",
});

const messageContent = ref<InstanceType<HTMLDivElement>>();
const fakeMarkNode = ref<InstanceType<HTMLDivElement>>();

let observer;
onMounted(() => {
	observer = new IntersectionObserver(loadNextPage, {
		root: messageContent.value,
		rootMargin: "15px",
		threshold: 1,
	});
	observer.observe(fakeMarkNode.value);
});

onUnmounted(() => {
	observer.disconnect();
	observer = null;
});
</script>
