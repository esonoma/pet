import RouterInterceptor from "./RouterInterceptor";
import {
	originRouterMaps,
	rewriteRouterMethods,
	RewriteRouterMethodsKeys,
} from "./originRouter";
import { defineClassBinds } from "../property";

export class Router
	extends RouterInterceptor
	implements RewriteRouterMethodsKeys
{
	constructor() {
		super();
		defineClassBinds(this, Array.from(rewriteRouterMethods));
	}

	redirectTo(options: UniApp.RedirectToOptions): void {
		this.dispatchBeforeEach(options, () => {
			originRouterMaps.redirectTo(options);
		});
	}

	navigateTo(options: UniApp.NavigateToOptions): void {
		this.dispatchBeforeEach(options, () => {
			console.log("navigateTo", originRouterMaps);
			originRouterMaps.navigateTo(options);
		});
	}

	switchTab(options: UniApp.SwitchTabOptions): void {
		this.dispatchBeforeEach(options, () => {
			originRouterMaps.switchTab(options);
		});
	}

	reLaunch(options: UniApp.ReLaunchOptions): void {
		this.dispatchBeforeEach(options, () => {
			originRouterMaps.reLaunch(options);
		});
	}

	navigateBack(options: UniApp.NavigateBackOptions): void {
		this.dispatchBeforeEach(options, () => {
			originRouterMaps.navigateBack(options);
		});
	}
}
