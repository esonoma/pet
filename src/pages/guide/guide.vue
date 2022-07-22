<template>
	<status-bar />
	<view class="app-guide-wrap">
		<swiper class="swiper" indicator-dots @change="onSwiperChange">
			<swiper-item
				v-for="guideItem in guides"
				:key="guideItem.id"
				:class="['swiper-item', ...guideItem.classes]"
				:style="{ backgroundColor: guideItem.bgColor }"
			>
				<view>
					<text>
						{{ guideItem.description }}
					</text></view
				>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import StatusBar from "@/components/status-bar/index.vue";

const guides = reactive([
	{ type: "text", id: "1", description: "A", bgColor: "red", classes: [] },
	{ type: "slot", id: "2", description: "B", bgColor: "yellow", classes: [] },
	{ type: "image", id: "3", description: "C", bgColor: "blue", classes: [] },
]);

interface SwiperChangeEvent {
	detail: { current: unknown; source: unknown };
}

function onSwiperChange(event: SwiperChangeEvent) {
	// event.detail.current;
	console.log(event);
}
</script>

<style lang="less">
@import "./guide.less";
</style>
