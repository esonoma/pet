<template>
	<view
		class="responsive-image-box"
		v-if="visible"
		:style="{
			width: width,
			height: height,
			...$props.containerStyle,
		}"
	>
		<img
			class="responsive-image"
			:src="$props.image"
			:style="{
				objectFit: $props.objectFit,
				...$props.imageStyle,
			}"
		/>
	</view>
</template>

<script setup lang="ts">
import { CSSProperties, PropType } from "vue";

defineProps({
	image: {
		type: String,
		required: false,
		default: () => "",
	},
	width: {
		type: String,
		required: false,
		default: () => "60rpx",
	},
	height: {
		type: String,
		required: false,
		default: () => "60rpx",
	},
	visible: {
		type: Boolean,
		required: false,
		default: () => true,
	},
	"container-style": {
		type: Object as PropType<CSSProperties>,
		required: false,
		default: () => ({}),
	},
	"image-style": {
		type: Object as PropType<CSSProperties>,
		required: false,
		default: () => ({}),
	},
	"object-fit": {
		type: String,
		required: false,
		default: () => "cover",
	},
});
</script>

<style scoped lang="scss">
.responsive-image-box {
	.responsive-image {
		width: 100%;
		height: 100%;
	}
}
</style>
