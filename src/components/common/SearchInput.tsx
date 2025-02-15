import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { useMapEvents } from "react-leaflet";
import { snappShopEndpoints } from "@/services/api/SnappShopEndpoints";

let controller: AbortController;

function SearchInput({ setPosition }: { setPosition: Dispatch<SetStateAction<[number, number]>> }) {
	const map = useMapEvents({});
	const [value, setValue] = useState<string>("");

	const prepareController = () => {
		controller = new AbortController();
	};

	const searchAddress = async () => {
		try {
			if (controller) controller.abort();
			prepareController();
			const res = await snappShopEndpoints.searchAddress(value, controller.signal);
			const location: [number, number] = [res.lat, res.lng];
			setPosition(location);
			map.flyTo(location, 12);
		} catch (e) {
			console.warn(e);
		}
	};

	useEffect(() => {
		if (value.length >= 3) {
			const timeout = setTimeout(() => {
				searchAddress();
			}, 1000);
			return () => clearTimeout(timeout);
		}
	}, [value]);

	return (
		<div className="relative flex w-full items-center">
			<input
				type="text"
				className="h-10 w-full rounded border p-3 pr-10 shadow-sm outline-none"
				placeholder="جستجو در تهران"
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
			/>
			<Image src="/images/svg/search.svg" alt="search" width={16} height={16} className="absolute right-3 top-1/2 -translate-y-1/2" />
		</div>
	);
}

export default SearchInput;
