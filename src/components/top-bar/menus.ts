import { reactive, ref } from "vue";

export const activeMenuId = ref(0);
export const menuConfig = reactive([
	{
		id: 0,
		title: "Dashboard",
		icon: "dashboard",
		path: "/pages/index/index",
		permission: "dashboard",
		routerRecord: false,
	},
	{
		id: 1,
		title: "Community",
		icon: "community",
		path: "/pages/community/index",
		permission: "community",
		routerRecord: false,
	},
	{
		id: 2,
		title: "Message",
		icon: "message",
		path: "/pages/message/index",
		permission: "message",
		routerRecord: false,
	},
	{
		id: 3,
		title: "Profile",
		icon: "profile",
		path: "/pages/profile/index",
		permission: "profile",
		routerRecord: false,
	},
]);

export function getActiveMenuId() {
	return activeMenuId.value;
}
export function setActiveMenuId(id: number) {
	activeMenuId.value = id;
}
export function isActiveMenu(id: number) {
	return activeMenuId.value === id;
}

export function jumpToMenuPath(id: number) {
	const menu = menuConfig[id];
	if (menu) {
		uni.redirectTo({ url: menu.path });
	}
}
