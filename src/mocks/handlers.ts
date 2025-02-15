import { http, HttpResponse } from "msw";
import { IGetAddressResponse } from "@/models/IGetAddressResponse";
import { ISearchAddressResponse } from "@/models/ISearchAddressResponse";
import { generateRandomAddress, generateRandomLatLng } from "@/utils";

export const handlers = [
	http.get("http://localhost:3000/api/search/get-address", () => {
		return HttpResponse.json<IGetAddressResponse>(generateRandomAddress());
	}),

	http.get("http://localhost:3000/api/search/search-address", () => {
		return HttpResponse.json<ISearchAddressResponse>(generateRandomLatLng());
	}),
];
