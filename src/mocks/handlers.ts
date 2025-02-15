import { http, HttpResponse } from "msw";
import { IGetAddressResponse } from "@/models/IGetAddressResponse";
import { ISearchAddressResponse } from "@/models/ISearchAddressResponse";
import { generateRandomAddress, generateRandomLatLng } from "@/utils";

export const handlers = [
	http.get(`${process.env.NEXT_PUBLIC_BASE_URL}search/get-address`, () => {
		return HttpResponse.json<IGetAddressResponse>(generateRandomAddress());
	}),

	http.get(`${process.env.NEXT_PUBLIC_BASE_URL}search/search-address`, () => {
		return HttpResponse.json<ISearchAddressResponse>(generateRandomLatLng());
	}),
];
