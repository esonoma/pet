type Module = Record<string, any>;
export function hasOwnProperty<M = Module>(obj: M, prop: string): boolean {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

export function setProperty<M = Module, V = any>(obj: M, property: string, value: V) {
    Reflect.set(obj as Object, property, value);
}