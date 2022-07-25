<script setup lang="ts">
import { onLaunch, onShow, onHide, onError } from "@dcloudio/uni-app";
import { getUserInfoService } from "@domains/user.service";

function startGuide(guideURL: string) {
	uni.redirectTo({
		url: guideURL,
		success: () => uni.setStorageSync("guide_status", true),
	});
}
async function startNewUserGuide() {
	const guideStatus = uni.getStorageSync("guide_status");

	// 本地存在引导状态，则不引导
	// XXX: 但是需要注意如果使用了 增量更新或全量更新 服务，处于资源的变化需要重新引导
	if (guideStatus) return;

	// 云端引导状态 不存在，则引导
	const userInfo = await getUserInfoService();
	if (!userInfo.isNewUser) {
		startGuide("/pages/guide/guide");
	}
}

/* #ifdef MP-WEIXIN */
function mpUpgradeCheck() {
	uni.getUpdateManager().onCheckForUpdate((res) => {
		// 请求完新版本信息的回调
		console.log(res.hasUpdate);
	});
}
/* #endif */

/* #ifdef APP-PLUS */
function appUpgradeCheck() {
	// 发起版本检测请求
	// upgradeCheck()
	// promptUpgrade()
	// setupNewVersion()
	// reloadApp()
}
/* #endif */

function startUpdateCheck() {
	// 小程序更新检查
	/* #ifdef MP-WEIXIN */
	mpUpgradeCheck();
	/* #endif */

	// App更新检查
	/* #ifdef APP-PLUS */
	appUpgradeCheck();
	/* #endif */
}

onLaunch(() => {
	// TODO: 检查更新
	startUpdateCheck();

	// 初始化引导页
	startNewUserGuide();
});

onShow(() => {
	// console.log("App Show");
});
onHide(() => {
	// console.log("App Hide");
});
onError(() => {
	// 上传错误信息至监控平台
});
</script>
