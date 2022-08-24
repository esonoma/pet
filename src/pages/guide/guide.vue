<template>
	<status-bar />
	<universal-swiper
		keys="id"
		class="swiper-guide-wrap"
		:sources="guides"
		easing-function="linear"
		:onChange="onChange"
		:current="active"
	>
		<template #swiperItem="{ swiperItem, index }">
			<guide-item
				:data="swiperItem"
				:index="index"
				:size="guides.length"
				:active="active"
			/>
		</template>
	</universal-swiper>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { onShow } from "@dcloudio/uni-app";
import statusBar from "@/components/status-bar/index.vue";
import universalSwiper from "@/components/swiper/swiper.vue";
import guideItem from "./components/guide-item/index.vue";
import type { UniSwiperChangeEvent } from "@/components/swiper/swiperTypes";

onShow(() => {
	if (uni.getStorageSync("guide_status")) {
		uni.reLaunch({ url: "/pages/index/index" });
	}
});
const active = ref(0);
function nextGuidePage() {
	active.value += 1;
}
const goHomePage = () => {
	uni.reLaunch({
		url: "/pages/index/index",
		success: () => uni.setStorageSync("guide_status", true),
	});
};
const onChange = (event: UniSwiperChangeEvent) => {
	active.value = event.detail.current;
};
const nextActions = [{ text: "Next", onClick: nextGuidePage }];
const guides = reactive([
	{
		id: 0,
		type: "rich",
		image: {
			src: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
			alt: "guide-item-image",
		},
		title: { content: "Find the Pet you love" },
		description:
			"Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Lorem ",
		actions: nextActions,
	},
	{
		id: 1,
		type: "rich",
		image: {
			src: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg",
			alt: "guide-item-image",
		},
		title: { content: "Find like-minded friends nearby" },
		description: "Lorem ipsum dolor sit ame",
		actions: nextActions,
	},
	{
		id: 2,
		type: "rich",
		image: {
			src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2rcEm8LK_ecYUlTn87bP_PK1zkpKVDRDZwMlgtFxHRPnJqoZkrWOhVdNaLZ5VwT_zWM&usqp=CAU",
			alt: "guide-item-image",
		},
		title: { content: "Find your new friends" },
		description:
			"Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Lorem ",
		actions: [{ text: "Get Started", onClick: goHomePage }],
	},
]);
</script>

<style lang="scss" scoped>
@import "./guide.scss";
</style>
