<template>
	<view class="swiper-warp">
		<!--
			@XXX：关于为什么需要将props全部写上的解释

			下方属性props在正常环境下应该使用 v-bind 指令，
			但是，
			至今为止，uniapp cli 并不支持小程序环境下使用 v-bind 指令
			你会得到一个 "v-bind is not supported" in Weex environment error。

			如果只是考虑开发h5，则可以使用 v-bind 指令。
		-->
		<swiper
			class="swiper"
			:indicator-dots="$props.indicatorDots"
			:indicator-color="$props.indicatorColor"
			:indicator-active-color="$props.indicatorActiveColor"
			:active-class="$props.activeClass"
			:changing-class="$props.changingClass"
			:autoplay="$props.autoplay"
			:current="$props.current"
			:current-item-id="$props.currentItemId"
			:interval="$props.interval"
			:duration="$props.duration"
			:circular="$props.circular"
			:vertical="$props.vertical"
			:previous-margin="$props.previousMargin"
			:next-margin="$props.nextMargin"
			:acceleration="$props.acceleration"
			:disable-programmatic-animation="
				$props.disableProgrammaticAnimation
			"
			:display-multiple-items="$props.displayMultipleItems"
			:skip-hidden-item-layout="$props.skipHiddenItemLayout"
			:disable-touch="$props.disableTouch"
			:touchable="$props.touchable"
			:easing-function="$props.easingFunction"
			@transition="$props.transition"
			@animationfinish="$props.animationfinish"
			ref="swiperRef"
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

// 解释同上template中
import { defineSwiperNativeProps } from "./defineSwiperNativeProps";

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
	...defineSwiperNativeProps,
	onChange: {
		type: Function as PropType<(event: UniSwiperChangeEvent) => void>,
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
