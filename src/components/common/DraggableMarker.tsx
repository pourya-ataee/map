import { useState } from "react";
import Marker from "./Marker";
import { useMapEvents } from "react-leaflet";

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

export default DraggableMarker;
