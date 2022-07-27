<template>
	<status-bar />

	<view class="fake-btn fake-btn-switch-language" @tap="tapSwitchLanguage">
		<text>{{ $t("common.locales.switchLanguage") }}</text>
	</view>

	<view class="community-page-content">
		<text>{{ $t("community.communityTitle") }}</text>
	</view>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import statusBar from "@components/status-bar/index.vue";
import { enabledLocales } from "@locales";

const i18n = useI18n();
function tapSwitchLanguage() {
	i18n.locale.value = getTargetLanguage(i18n.locale.value);
}
function getTargetLanguage(currentLanguage: string) {
	if (currentLanguage === enabledLocales.ZH_CN) {
		return enabledLocales.EN_US;
	}
	return enabledLocales.ZH_CN;
}
</script>
<style lang="scss">
page {
	height: 100%;
	width: 100%;
	background-color: salmon; // 鲑红
}
</style>

<style lang="scss" scoped>
// notes: 为什么page不生效? 参考下uni-app博文
// ref: https://uniapp.dcloud.io/tutorial/syntax-css.html#%E9%80%89%E6%8B%A9%E5%99%A8
page {
	height: 100%;
	width: 100%;
	background-color: darkseagreen; // 暗海绿
}

.community-page-content {
	height: 30%;
	background-color: #c0caad; // 晨蓝
}

.fake-btn-switch-language {
	width: 160rpx;
	height: 40rpx;
	line-height: 40rpx;
	border-radius: 20rpx;
	font-size: 12px;
	background-color: aliceblue;
	text-align: center;
}
</style>
