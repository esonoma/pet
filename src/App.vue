<script setup lang="ts">
import { provide } from "vue";
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { useLogin } from "./store/login";

const login = useLogin();

onLaunch(() => {
	// 小程序启动时触发，只会触发一次
});
onShow(() => {
	// console.log("App Show");
});
onHide(() => {
	// console.log("App Hide");
});
</script>
<style></style>
