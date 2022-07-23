import { UniSwiperChangeEvent } from "./swiperTypes";

export function isLastItem(
	detail: UniSwiperChangeEvent["detail"],
	sourcesLength: number,
): boolean {
	return detail.current === sourcesLength - 1;
}

export function isFirstItem(detail: UniSwiperChangeEvent["detail"]): boolean {
	return detail.current === 0;
}
