<template>
	<view class="guide-item">
		<view class="guide-top-container">
			<view class="responsive-image-container">
				<img
					v-if="data?.image?.src"
					:src="data?.image?.src"
					:alt="data?.image?.alt"
				/>
			</view>
		</view>
		<view class="guide-item-title">
			<text> {{ data.title.content }} </text>
		</view>
		<view class="guide-item-description">
			<text>{{ data.description }} </text>
		</view>
		<view class="guide-navigate-lines">
			<view
				class="guide-navigate-line-item"
				v-for="line in size"
				:key="data.id + line"
				:class="{
					'guide-navigate-line-item-active': active === line - 1,
				}"
			/>
		</view>

		<view class="guide-item-actions-container">
			<button
				type="button"
				class="guide-item-action"
				@tap="data.actions?.[0]?.onClick"
			>
				{{ data.actions[0].text }}
			</button>
		</view>
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
	size: {
		type: Number as PropType<number>,
		required: false,
		default: () => 0,
	},
	active: {
		type: Number as PropType<number>,
		required: false,
		default: () => 0,
	},
});
</script>

<style scoped lang="scss">
@import "./guide-item.scss";
</style>
