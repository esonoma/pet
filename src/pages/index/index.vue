<template>
	<status-bar />
	<app-header text="Workbench" page="Home" />
	<view class="home-content">
		<uni-easyinput
			suffixIcon="search"
			class="app-header-search"
			placeholder="search for something"
		/>
		<normal-category :categories="categories" :onClick="onItemClick" />
	</view>
	<fixed-top-bar />
</template>

<script setup lang="ts">
import appHeader from "@components/app-header/index.vue";
import statusBar from "@components/status-bar/index.vue";
import normalCategory from "@components/category/normal-category.vue";
import fixedTopBar from "@components/top-bar/fixed-top-bar.vue";
import { reactive } from "vue";

const categories = reactive([
	{
		id: 1,
		title: "Cats",
	},
	{
		id: 2,
		title: "Dogs",
	},
	{
		id: 3,
		title: "Brides",
	},
	{
		id: 4,
		title: "Snakes",
	},
]);

function onItemClick(categoryProps) {
	console.log(categoryProps);
}
</script>

<style scoped lang="scss">
.home-content {
	padding: 0 30rpx;

	.app-header-search {
		margin: 48rpx 0;
		border: none;
		outline: none;
		// height: 100rpx;
	}
}
</style>
