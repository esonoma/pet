<template>
	<view class="category-container">
		<base-category :categories="categories">
			<template #category="categoryProps">
				<view class="category-item" @click="onClick(categoryProps)">
					<view class="category-item-icon-box">
						<img
							class="category-item-icon"
							src="https://cdn.logo.com/hotlink-ok/logo-social.png"
						/>
					</view>
					<text class="category--item-name">{{
						categoryProps.category.title
					}}</text>
				</view>
			</template>
		</base-category>
	</view>
</template>

<script setup lang="ts">
import baseCategory from "./index.vue";

const props = defineProps({
	categories: {
		type: Array,
		required: false,
		default: () => [],
	},
	onClick: {
		type: Function,
		required: false,
		// default: () => {},
	},
});

function onClick(categoryProps) {
	if (props.onClick) {
		props.onClick(categoryProps);
	}
}
</script>

<style scoped lang="scss">
.category-container {
	margin: 30rpx 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 16rpx;
}

.category-item {
	display: flex;
	align-items: center;
	background-color: aliceblue;
	padding: 10rpx 20rpx;
	border-radius: 40rpx;

	.category-item-icon-box {
		margin-right: 20rpx;
		width: 60rpx;
		height: 60rpx;
		border-radius: 30rpx;
		aspect-ratio: 1;
		overflow: hidden;
		// object-fit: cover;

		.category-item-icon {
			aspect-ratio: 1;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.category--item-name {
		font-size: 28rpx;
		color: rgb(64, 64, 61);
		font-family: "PingFang SC", sans-serif;
	}
}
</style>
