const authTokenKey = "authToken";

export function setAuthenticationToken(authorization: string) {
	uni.setStorageSync(authTokenKey, authorization);
}

export function getAuthenticationToken(): string {
	return uni.getStorageSync(authTokenKey);
}
