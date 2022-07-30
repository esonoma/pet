import { hasOwnProperty, setProperty } from "@/helpers";
import AbortControllerCancel from "./AbortControllerCancel";
import AxiosCancelTokenCancel from "./AxiosCancelTokenCancel";
import BaseCancel from "./BaseCancel";

export * from "./BaseCancel";

const achievedCancelControllers = [
	AbortControllerCancel,
	AxiosCancelTokenCancel,
].reduce<
	{
		abort?: AbortControllerCancel;
		axios?: AxiosCancelTokenCancel;
	} & { [key: string]: BaseCancel }
>((result, CancelController) => {
	const cancelController = new CancelController();

	setProperty(result, cancelController.cancelMode, cancelController);

	return result;
}, {});

export default achievedCancelControllers;
export function getCancelController(
	cancelMode: string | "axios" | "abort",
): AbortControllerCancel | AxiosCancelTokenCancel | undefined {
	return achievedCancelControllers[cancelMode];
}

export function filterCancelRequest(
	cancelModes: (string | "axios" | "abort")[],
) {
	return cancelModes.filter((cancelMode) => {
		return hasOwnProperty(achievedCancelControllers, cancelMode);
	});
}
