"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import Marker from "@/components/common/Marker";
import "leaflet/dist/leaflet.css";
import SearchInput from "@/components/common/SearchInput";

const MAP_TILE_URL = "https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png";
const INITIAL_POSITION: [number, number] = [35.6892, 51.389]; // Tehran, Iran

interface DraggableMarkerProps {
	setPosition: (position: [number, number]) => void;
}

const DraggableMarker: React.FC<DraggableMarkerProps> = ({ setPosition }) => {
	const [moving, setMoving] = useState(false);

	const mapEvents = useMapEvents({
		dragstart() {
			setMoving(true);
		},
		dragend() {
			setMoving(false);
			const newPosition = mapEvents.getCenter();
			setPosition([newPosition.lat, newPosition.lng]);
		},
		zoomstart() {
			setMoving(true);
		},
		zoomend() {
			setMoving(false);
		},
	});

	return (
		<div className={`absolute right-1/2 top-1/2 z-[9999] -translate-y-1/2 translate-x-1/2 transition-all`}>
			<Marker isMoving={moving} />
		</div>
	);
};

function Home() {
	const [position, setPosition] = useState<[number, number]>(INITIAL_POSITION);

	useEffect(() => {
		fetch(`/search/get-address?lat=${position[0]}&lng=${position[1]}`)
			.then((res) => res.json())
			.then((data) => console.log("Fetched Address:", data.address))
			.catch((err) => console.error("Error fetching address:", err));
	}, [position]);

	return (
		<div className="relative flex w-full items-center justify-center">
			<MapContainer center={position} zoom={10} className="leaflet-container relative z-0 h-[500px] w-[500px]">
				<div className="absolute left-4 right-4 top-4 z-[9999]">
					<SearchInput />
				</div>
				<TileLayer url={MAP_TILE_URL} />
				<DraggableMarker setPosition={setPosition} />
			</MapContainer>
		</div>
	);
}

export default Home;
