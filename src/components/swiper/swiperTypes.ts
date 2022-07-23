export interface SwiperItem {
	id?: number | string;
	classes?: string[];
	[key: string]: any;
}

export interface UniSwiperChangeEvent {
	type: string;
	timeStamp: number;
	detail: {
		current: number;
		source: string;
		currentItemId: string;
	};
	target: {
		id: string;
		dataset: {
			[property: string]: unknown;
		};
		offsetLeft: number;
		offsetTop: number;
	};
}
