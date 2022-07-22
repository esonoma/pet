import { AnyFunction } from "@/types/utils";

export class Eventemitter<V extends AnyFunction = AnyFunction> {
	private events: Map<string, V> = new Map<string, V>();

	private onceEventMap: Set<string> = new Set<string>();

	on(event: string, eventHandler: V) {
		this.register(event, eventHandler);
		return () => this.cancel(event);
	}

	getEvent(event: string): V | undefined {
		return this.events.get(event);
	}

	once(event: string, eventHandler: V) {
		this.register(event, eventHandler);
		this.onceEventMap.add(event);
	}

	protected register(event: string, eventHandler: V): Eventemitter<V> {
		this.events.set(event, eventHandler);
		return this;
	}

	emit(event: string, ...args: any[]): void {
		const eventHandler = this.getEvent(event);
		if (!eventHandler) return;

		if (this.isOnceEvent(event)) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			eventHandler(...args);

			this.cancel(event);
			this.cancelOnceEvent(event);
		} else {
			eventHandler(...args);
		}
	}

	isOnceEvent(event: string): boolean {
		return this.onceEventMap.has(event);
	}

	cancel(event: string): boolean {
		return this.events.delete(event);
	}

	cancelOnceEvent(event: string): boolean {
		return this.onceEventMap.delete(event);
	}
}
