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
	uni.reLaunch({ url: "/pages/index/index" });
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
			src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.749xh;0,0.154xh&resize=980:*",
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
			src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.749xh;0,0.154xh&resize=980:*",
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
			src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.749xh;0,0.154xh&resize=980:*",
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
