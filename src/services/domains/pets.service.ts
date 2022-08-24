import http from "@http/index";

// XXX(@Branlice): This is a temporary solution to get the pet data.
interface GalleryModel {
	asset_id: number;
	url: string;
	thumbnail_url: string;
	alt: string;
}
interface PetModel {
	id: number;
	name: string;
	type: string;
	description: string;
	breed: string;
	galleries: GalleryModel[];
}
export function getPetService() {
	// XXX(@Branlice): This is a temporary solution to get the pet data.
	// You can use the autoLoading mechanism to replace the plaintext encoding.
	return http.request<PetModel[]>({
		method: "GET",
		url: "/pets",
	});
}
