import http from "../http";

export function getBuckets() {
	return http.get("/buckets");
}
