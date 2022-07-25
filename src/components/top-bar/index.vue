<template>
	<view class="custom-top-bar custom-top-bar-container">
		<view
			class="custom-top-bar-item"
			v-for="menuItem in menuConfig"
			:key="menuItem.id"
			:class="{
				'custom-top-bar-item-active': menuItem.id === activeMenuId,
			}"
			@click="onMenuItemClick(menuItem.id)"
		>
			<text>
				{{ menuItem.title }}
			</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
import {
	menuConfig,
	activeMenuId,
	setActiveMenuId,
	jumpToMenuPath,
} from "./menus";

function onMenuItemClick(menuId: string) {
	jumpToMenuPath(menuId);
	setActiveMenuId(menuId);
}
</script>
<style lang="scss" scoped src="./top-bar.scss"></style>
