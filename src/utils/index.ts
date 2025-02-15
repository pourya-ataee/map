import { cities, streets } from "@/constants/address";
import { IGetAddressResponse } from "@/models/IGetAddressResponse";
import { ISearchAddressResponse } from "@/models/ISearchAddressResponse";

export const generateRandomAddress = (): IGetAddressResponse => {
	const randomCity = cities[Math.floor(Math.random() * cities.length)];
	const randomStreet = streets[Math.floor(Math.random() * streets.length)];

	return { address: [randomCity, randomStreet] };
};

export const generateRandomLatLng = (): ISearchAddressResponse => {
	const latMin = 35.5;
	const latMax = 35.9;
	const lngMin = 51.2;
	const lngMax = 51.6;

	const randomLat = (Math.random() * (latMax - latMin) + latMin).toFixed(6);
	const randomLng = (Math.random() * (lngMax - lngMin) + lngMin).toFixed(6);

	return { lat: parseFloat(randomLat), lng: parseFloat(randomLng) };
};
