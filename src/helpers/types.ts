export function isStrictPromise(value: any): value is Promise<any> {
	return thenable(value) && isPromise(value);
}
export function isPromise(value: any): boolean {
	return createCheckerFactory(value, "Promise");
}
export function isFunction(value: any): boolean {
	return createCheckerFactory(value, "Function");
}
export function isArray(value: any): boolean {
	return createCheckerFactory(value, "Array");
}
export function isObject(value: any): boolean {
	return createCheckerFactory(value, "Object");
}

export function createCheckerFactory(value: any, type: string): boolean {
	return Object.prototype.toString.call(value) === `[object ${type}]`;
}

export function thenable(promiseInstance: any) {
	return promiseInstance && isFunction(promiseInstance.then);
}
