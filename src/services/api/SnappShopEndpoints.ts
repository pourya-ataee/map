import { httpClient } from "../HttpClient";
import { IGetAddressResponse } from "@/models/IGetAddressResponse";
import { ISearchAddressResponse } from "@/models/ISearchAddressResponse";

export const snappShopEndpoints = {
	fetchAddress: async (lat: number, lng: number) => {
		return httpClient.get<IGetAddressResponse>({
			url: `search/get-address`,
			params: { lat, lng },
		});
	},
	searchAddress: async (address: string, signal: AbortSignal) => {
		return httpClient.get<ISearchAddressResponse>({
			url: `search/search-address`,
			params: { address },
			signal,
		});
	},
};
