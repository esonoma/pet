import { isArray } from "./types";

export default class Queue<QueueValue = any> {
	queues: QueueValue[] = [];

	enqueue(value: QueueValue | QueueValue[]): void {
		if (isArray(value)) {
			this.queues.concat(value);
		}
		this.queues.push(value as QueueValue);
	}

	dequeue(): QueueValue | undefined {
		return this.queues.shift();
	}

	peek(): QueueValue | undefined {
		return this.queues[0];
	}

	isEmpty(): boolean {
		return this.queues.length === 0;
	}

	clear(): void {
		this.queues = [];
	}

	size(): number {
		return this.queues.length;
	}

	toArray(): QueueValue[] {
		return this.queues;
	}

	print(): string {
		return this.queues.toString();
	}
}
