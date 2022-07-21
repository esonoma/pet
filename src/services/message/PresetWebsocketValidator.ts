export class PresetWebsocketValidator {
	isTextMessage(message: UniApp.OnSocketMessageCallbackResult): boolean {
		return !!message.data;
	}

	isLegitimate(message: UniApp.OnSocketMessageCallbackResult): boolean {
		return !!message.data;
	}
}
