<template>
	<view class="swiper-warp">
		<swiper
			class="swiper"
			ref="swiperRef"
			v-bind="nativeProps"
			@change="onSwiperChange"
		>
			<swiper-item
				:class="['swiper-item', ...itemClasses]"
				v-for="(swiperItem, index) in sources"
				:key="getKeys(swiperItem, index)"
			>
				<slot name="swiperItem" :swiperItem="swiperItem" :index="index">
				</slot>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { isFirstItem, isLastItem } from "./swiperHandlers";
import type { SwiperItem, UniSwiperChangeEvent } from "./swiperTypes";

const props = defineProps({
	keys: {
		type: String as PropType<string>,
		default: "id",
		required: false,
	},
	sources: {
		required: false,
		type: Array as PropType<SwiperItem[]>,
		default: () => [],
	},
	itemClasses: {
		type: Array as PropType<string[]>,
		default: () => [],
	},
	onLastItem: {
		type: Function as PropType<(event: UniSwiperChangeEvent) => void>,
		required: false,
	},
	onFirstItem: {
		type: Function as PropType<(event: UniSwiperChangeEvent) => void>,
		required: false,
	},
	onChange: {
		type: Function as PropType<(event: UniSwiperChangeEvent) => void>,
		required: false,
	},
	nativeProps: {
		type: Object as PropType<object>,
		default: () => ({}),
		required: false,
	},
});

function onSwiperChange(event: UniSwiperChangeEvent) {
	if (isFirstItem(event.detail)) {
		props?.onFirstItem?.(event);
	}

	if (isLastItem(event.detail, props?.sources.length)) {
		props?.onLastItem?.(event);
	}

	if (props?.onChange) {
		props?.onChange(event);
	}
}

function getKeys(swiperItem: SwiperItem, index: number): string | number {
	if (props?.keys && swiperItem[props?.keys]) {
		return swiperItem[props?.keys];
	}
	return index;
}
</script>
<style lang="less"></style>
