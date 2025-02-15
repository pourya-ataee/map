export type City = string;
export type Street = string;

export interface IGetAddressResponse {
	address: [City, Street];
}
