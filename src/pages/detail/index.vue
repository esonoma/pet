<template>
	<status-bar />

	<view class="page-detail page-detail-container">
		<view class="actions">
			<view class="action-back">A</view>
			<view class="action-like">B</view>
		</view>

		<view class="page-detail-pet-gallery">
			<universal-swiper
				key="id"
				:sources="petDetails.images"
				class="swiper-guide-wrap"
				indicator-dots
			>
				<template #swiperItem="{ swiperItem }">
					<view class="pet-gallery-item">
						<img class="gallery-item-img" :src="swiperItem.src" />
					</view>
				</template>
			</universal-swiper>
		</view>

		<view class="page-detail-pet-introduction">
			<view class="fake-drag-line" />
			<view class="pet-title">
				<text class="pet-title-text">{{ petDetails.name }}</text>
				<text>
					{{ petDetails.price.symbol }}
					{{ petDetails.price.amount }}
				</text>
			</view>
			<view class="pet-properties">
				<view>
					<text>{{ petDetails.gender }}</text>
					<text class="pet-properties-title">Gender</text>
				</view>
				<view>
					<text>{{ petDetails.color }}</text>
					<text class="pet-properties-title">Color</text>
				</view>
				<view>
					<text>{{ petDetails.breed }}</text>
					<text class="pet-properties-title">Breed</text>
				</view>
				<view>
					<text>{{ petDetails.weight }}</text>
					<text class="pet-properties-title">Weight</text>
				</view>
			</view>
			<button type="button" class="submit-action">Become friend</button>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import statusBar from "@/components/status-bar/index.vue";
import universalSwiper from "@/components/swiper/swiper.vue";

const petDetails = reactive({
	name: "Samantha",
	age: "2 years",
	breed: "Persian",
	description: "",
	price: {
		currency: "RMB",
		amount: "100",
		symbol: "¥",
	},
	images: [
		{
			id: "oss-xxxxx-1",
			src: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
			alt: "",
			// ...
		},
		{
			id: "oss-xxxxx-2",
			src: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg",
			alt: "",
			// ...
		},
	],
	gender: "Male",
	size: "",
	color: "Black",
	location: "",
	contact: "",
	status: "",
	weight: "2kg",
	type: "",
	user: {},
});
</script>

<style scoped lang="scss">
@import "./detail.scss";
</style>
