import { hasOwnProperty } from "..";

export interface RewriteRouterMethodsKeys {
	redirectTo(options: UniApp.RedirectToOptions): void;
	navigateTo(options: UniApp.NavigateToOptions): void;
	switchTab(options: UniApp.SwitchTabOptions): void;
	reLaunch(options: UniApp.ReLaunchOptions): void;
	navigateBack(options: UniApp.NavigateBackOptions): void;
}
export const rewriteRouterMethods = [
	"redirectTo",
	"navigateTo",
	"switchTab",
	"reLaunch",
	"navigateBack",
] as const;
export type Keys = typeof rewriteRouterMethods[number];

export const originRouterMaps =
	rewriteRouterMethods.reduce<RewriteRouterMethodsKeys>((acc, cur) => {
		if (!hasOwnProperty(acc, cur) && hasOwnProperty(uni, cur)) {
			// setProperty(acc, cur, uni[cur]);
			(acc as any)[cur] = uni[cur];
		}
		return acc;
	}, {} as RewriteRouterMethodsKeys);
