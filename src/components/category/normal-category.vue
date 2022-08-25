<template>
	<view class="category-container">
		<base-category :categories="categories">
			<template #category="categoryProps">
				<view
					class="category-item"
					:class="{
						'category-active-item':
							activeId === categoryProps?.category?.id,
					}"
					@click="onClick(categoryProps)"
				>
					<responsive-image
						width="46rpx"
						height="46rpx"
						:container-style="{
							borderRadius: '23rpx',
							overflow: 'hidden',
							marginRight: '8rpx',
						}"
						:visible="!!categoryProps.category.icon"
						:image="categoryProps.category.icon"
					/>
					<text class="category--item-name">
						{{ categoryProps.category.title }}
					</text>
				</view>
			</template>
		</base-category>
	</view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import baseCategory from "./index.vue";
import responsiveImage from "../image/responsive-image.vue";

const activeId = ref(1);

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
	activeId.value = categoryProps?.category?.id;
	if (props.onClick) {
		props.onClick(categoryProps);
	}
}
</script>

<style scoped lang="scss">
.category-container {
	display: flex;
	flex-wrap: wrap;
	gap: 16rpx;
}

.category-item {
	display: flex;
	align-items: center;
	padding: 12rpx 16rpx;
	border-radius: 40rpx;
	background: #f8f7f7;
	.category--item-name {
		font-family: $emphasized-content-font-family;
		font-size: 24rpx;
		color: rgb(64, 64, 61);
		font-weight: 500;
	}
}

.category-active-item {
	background: #827397;
	.category--item-name {
		color: #fff;
	}
}
</style>
