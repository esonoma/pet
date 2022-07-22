import { isArrayBuffer } from "../../helpers";

export default class PresetValidators {
	// utf8encoder = new TextEncoder();
	utf8decoder = new TextDecoder();

	isTextMessage(message: UniApp.OnSocketMessageCallbackResult): boolean {
		return !!message.data;
	}

	isLegitimate(message: UniApp.OnSocketMessageCallbackResult): boolean {
		return !!message.data;
	}

	parser(
		message: UniApp.OnSocketMessageCallbackResult,
		tojson = false,
	): Record<string, any> | any {
		const { data } = message;

		let result: string;
		if (isArrayBuffer(data)) {
			result = this.utf8decoder.decode(data as ArrayBuffer);
		} else {
			result = data.toString();
		}

		if (tojson) {
			try {
				return JSON.parse(result);
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error(error);
			}
		}

		return result;
	}
}
