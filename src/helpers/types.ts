/**
 * isPromise
 * @param {any} value
 * @returns {boolean}
 *
 * Promise 1: Promise.then is a function
 * Promise 2: promise instanceof Promise
 */
export function isStrictPromise(value: any): value is Promise<any> {
	return thenable(value) && isPromise(value);
}
export function isPromise(value: any): boolean {
	return createCheckerFactory(value, "Promise");
}

// isFunction
export function isFunction(value: any): boolean {
	return createCheckerFactory(value, "Function");
}

// isArray: 使用Object.prototype.toString.call检查是否是数组
export function isArray(value: any): boolean {
	return createCheckerFactory(value, "Array");
}

// isObject
export function isObject(value: any): boolean {
	return createCheckerFactory(value, "Object");
}

// isString
export function isString(value: any): boolean {
	return createCheckerFactory(value, "String");
}

/**
 * Object.prototype.toString.call 类型检查工厂
 *
 * @param value any
 * @param type string
 * @returns boolean
 */
export function createCheckerFactory(value: any, type: string): boolean {
	return Object.prototype.toString.call(value) === `[object ${type}]`;
}

// 检查是否是 thenable 对象
// 用于辅助 isStrictPromise 检验, 当一个对象实现了 then 方法时/并且then为Function, 就是 thenable 对象
export function thenable(promiseInstance: any) {
	return promiseInstance && isFunction(promiseInstance.then);
}

// ArrayBuffer: 是否是 ArrayBuffer 对象
// instance原理：在value的原型链上查找是否具有ArrayBuffer.prototype 属性
export function isArrayBuffer(value: any): boolean {
	return value instanceof ArrayBuffer;
}
