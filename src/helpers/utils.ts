import { AnyFunction } from "../types";
import { isFunction } from "./types";

export function safeExecCallback<P1 = any, V = any>(
	fn?: AnyFunction,
	p1?: P1,
	...args: any[]
): V | void {
	if (fn && isFunction(fn)) {
		return fn(p1, ...args);
	}
	return undefined;
}

export function noop() {
	// do nothing
}

// 生成uuid
export function createUuid() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		// eslint-disable-next-line no-bitwise
		const r = (Math.random() * 16) | 0;
		// eslint-disable-next-line no-bitwise
		const v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

// class mixin
interface AbstractAnyClass<ClassValue = any> {
	new (...args: any[]): ClassValue;
}
export function createClassExtendMixin<
	C extends AnyObject,
	T extends AbstractAnyClass<C> = AbstractAnyClass<any>,
>(SuperClass: T): T {
	return class AwesomeExtendSuperClass extends SuperClass {};
}
