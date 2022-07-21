import { isFunction, isObject } from "./types";

type Module = Record<string, any>;
type AnyFunction = (...args: any[]) => any;
type AnyClass = {
	new (...args: any[]): any;
	[key: string]: any;
};

export function hasOwnProperty<M = Module>(obj: M, prop: string): boolean {
	return Object.prototype.hasOwnProperty.call(obj, prop);
}
export function setProperty<M = Module, V = any>(
	obj: M,
	property: string,
	value: V,
) {
	return Reflect.set(obj as Module, property, value);
}
export function getProperty<M = Module, V = any>(obj: M, property: string): V {
	return Reflect.get(obj as Module, property);
}
export function deleteProperty<M = Module>(obj: M, property: string) {
	Reflect.deleteProperty(obj as Module, property);
}

export function defineClassBinds<C = AnyClass>(
	classInstance: C,
	bindMaps: string[] | Record<string, AnyFunction>,
): C {
	if (Array.isArray(bindMaps)) {
		processSameNameBinds(classInstance, bindMaps);
	} else {
		processObjectBinds(classInstance, bindMaps);
	}
	return classInstance;
}

function processSameNameBinds<C>(classInstance: C, bindMaps: string[]) {
	bindMaps.forEach((bindMapKey) => {
		const value = getProperty(classInstance, bindMapKey)
			? getProperty(classInstance, bindMapKey)
			: undefined;
		if (isFunction(value)) {
			defineBind<C, Uni>(classInstance, bindMapKey, value, {
				rewriteTarget: uni,
			});
		}
	});
}

function processObjectBinds<C>(
	classInstance: C,
	bindMaps: Record<string, AnyFunction>,
) {
	Object.keys(bindMaps).forEach((bindMapKey) => {
		const value = bindMaps[bindMapKey];
		if (isFunction(value)) {
			defineBind<C, Uni>(classInstance, bindMapKey, value, {
				rewriteTarget: uni,
			});
		}
	});
}

export function defineBind<C, T = Uni>(
	classInstance: C,
	property: string,
	bindFunc: AnyFunction,
	options: {
		rewriteTarget?: T;
	},
): void {
	const { rewriteTarget } = options;
	if (rewriteTarget && typeof rewriteTarget === "object") {
		setProperty(rewriteTarget, property, bindFunc.bind(classInstance));
	} else {
		setProperty(classInstance, property, bindFunc.bind(classInstance));
	}
}
