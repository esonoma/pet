<template>
	<status-bar />
	<universal-swiper
		keys="id"
		class="swiper-guide-wrap"
		:sources="guides"
		:onLastItem="handlerLastItem"
		easing-function="linear"
		autoplay
	>
		<template #swiperItem="{ swiperItem, index }">
			<guide-item :data="swiperItem" :index="index" />
		</template>
	</universal-swiper>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { UniSwiperChangeEvent } from "@components/swiper/swiperTypes";
import statusBar from "@/components/status-bar/index.vue";
import universalSwiper from "@/components/swiper/swiper.vue";
import guideItem from "./components/guide-item/index.vue";

const guides = reactive([
	{ type: "text", id: "1", description: "A", bgColor: "red" },
	{ type: "slot", id: "2", description: "B", bgColor: "yellow" },
	{ type: "image", id: "3", description: "C", bgColor: "blue" },
]);

function handlerLastItem(event: UniSwiperChangeEvent) {
	console.log("last item", event);
}
</script>

<style lang="scss" scoped>
@import "./guide.scss";
</style>
