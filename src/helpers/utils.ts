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
