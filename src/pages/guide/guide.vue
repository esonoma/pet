<template>
	<status-bar />

	<view class="app-guide-wrap">
		<swiper
			class="swiper"
			:indicator-dots="!locked"
			@change="onSwiperChange"
			easing-function="linear"
			:disable-touch="locked"
		>
			<swiper-item
				v-for="guideItem in guides"
				:key="guideItem.id"
				:class="['swiper-item', ...guideItem.classes]"
				:style="{ backgroundColor: guideItem.bgColor }"
			>
				<view class="swiper-item-content">
					<text>
						{{ guideItem.description }}
					</text></view
				>
			</swiper-item>
		</swiper>
	</view>

	<view class="actions" v-if="locked">
		<button type="button" class="start-shopping" @click="handleClick">
			Start Shopping
		</button>
	</view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import StatusBar from "@/components/status-bar/index.vue";

const locked = ref(false);
const guides = reactive([
	{ type: "text", id: "1", description: "A", bgColor: "red", classes: [] },
	{ type: "slot", id: "2", description: "B", bgColor: "yellow", classes: [] },
	{ type: "image", id: "3", description: "C", bgColor: "blue", classes: [] },
]);

interface SwiperChangeEvent {
	type: string;
	timeStamp: number;
	detail: {
		current: number;
		source: string;
		currentItemId: string;
	};
	target: {
		id: string;
		dataset: {
			[key: string]: string;
		};
		offsetLeft: number;
		offsetTop: number;
	};
}

function isLastItem(detail: SwiperChangeEvent["detail"]): boolean {
	return guides.length - 1 === detail.current;
}

function onSwiperChange(event: SwiperChangeEvent) {
	if (isLastItem(event.detail)) {
		locked.value = true;
	}
}

function handleClick() {
	uni.redirectTo({ url: "/pages/index/index" });
}
</script>

<style lang="less">
@import "./guide.less";
</style>
