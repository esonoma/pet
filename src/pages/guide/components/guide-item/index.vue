<template>
	<view v-bind="nativeProps" class="guide-item">
		{{ $props }}
	</view>
</template>

<script setup lang="ts">
import type { SwiperItem } from "@components/swiper/swiperTypes";
import { PropType } from "vue";
import { AnyFunction } from "@/types";
import { noop } from "@/helpers";

defineProps({
	data: {
		type: Object as PropType<SwiperItem>,
		required: false,
		default: () => ({}),
	},
	index: {
		type: Number as PropType<number>,
		required: false,
		default: () => 0,
	},
	onSkipClick: {
		type: Function as PropType<AnyFunction>,
		required: false,
		default: noop,
	},
	nativeProps: {
		type: Object as PropType<object>,
		required: false,
		default: () => ({}),
	},
});
</script>

<style scoped lang="less">
@import "./guide-item.less";
</style>
