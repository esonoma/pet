<script setup lang="ts">
import { provide } from "vue";
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { useLogin } from "./store/login";

const login = useLogin();

onLaunch(() => {
	let wsConnected = false;
	const socket = uni.connectSocket({
		url: "wss://dbe1-222-211-237-49.jp.ngrok.io",
		header: {
			"content-type": "application/json",
		},
		success() {
			wsConnected = true;
		},
	});
	socket.onMessage((data: any) => {
		login.setLoginUser(data.data);
	});
	provide("socket", socket);
	provide("wsConnected", wsConnected);
});
onShow(() => {
	// console.log("App Show");
});
onHide(() => {
	// console.log("App Hide");
});
</script>
<style></style>
