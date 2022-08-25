<template>
	<view class="category-view">
		<card-header
			leftLabel="Pets Categories"
			rightLabel="More category"
			:onClick="openCategory"
		/>
		<card-content>
			<template #CardContent>
				<normal-category
					:categories="categories"
					:onClick="onItemClick"
				/>
			</template>
		</card-content>
	</view>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import cardHeader from "@components/card/card-header.vue";
import cardContent from "@components/card/card-content.vue";
import normalCategory from "@components/category/normal-category.vue";

const categories = reactive([
	{
		id: 1,
		title: "Cats",
		icon: "/static/images/categories/cat.png",
	},
	{
		id: 2,
		title: "Dogs",
		icon: "/static/images/categories/dog.png",
	},
	{
		id: 3,
		title: "Rabbit",
		icon: "/static/images/categories/rabbit.png",
	},
	{
		id: 4,
		title: "Turtle",
		icon: "/static/images/categories/turtle.png",
	},
	{
		id: 5,
		title: "Rabbit",
		icon: "/static/images/categories/rabbit.png",
	},
	{
		id: 6,
		title: "Cats",
		icon: "/static/images/categories/cat.png",
	},
]);
function openCategory(event, content) {
	console.log(event, content);
}
function onItemClick(categoryProps) {
	console.log(categoryProps);
}
</script>

<style scoped lang="scss">
.category-view {
	margin-bottom: 40rpx;
}
</style>
