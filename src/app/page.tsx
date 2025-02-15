"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import SearchInput from "@/components/common/SearchInput";
import DraggableMarker from "@/components/common/DraggableMarker";
import { snappShopEndpoints } from "@/services/api/SnappShopEndpoints";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
	import("../mocks/index");
}

const MAP_TILE_URL = "https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png";
const INITIAL_POSITION: [number, number] = [35.6892, 51.389]; // Tehran, Iran

function Home() {
	const mount = useRef<boolean>(false);
	const [address, setAddress] = useState<string[]>([]);
	const [position, setPosition] = useState<[number, number]>(INITIAL_POSITION);

	const fetchAddress = async () => {
		try {
			const res = await snappShopEndpoints.fetchAddress(position[0], position[1]);
			setAddress(res.address);
		} catch (e) {
			console.warn(e);
		}
	};

	useEffect(() => {
		if (mount.current) {
			fetchAddress();
		} else {
			mount.current = true;
		}
	}, [position]);

	return (
		<div className="relative flex w-full flex-col items-center justify-center">
			<MapContainer center={position} zoom={10} className="leaflet-container relative z-0 h-[500px] w-[500px] max-w-full">
				<div className="absolute left-4 right-4 top-4 z-[9999]">
					<SearchInput setPosition={setPosition} />
				</div>
				<TileLayer url={MAP_TILE_URL} />
				<DraggableMarker setPosition={setPosition} />
			</MapContainer>
			<div className="mt-4 w-full max-w-[500px] text-start">آدرس: {address.length ? `${address[0]}, ${address[1]}` : "-"}</div>
		</div>
	);
}

export default Home;
