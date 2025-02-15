import React from "react";

interface IProps {
	isMoving: boolean;
}

function Marker({ isMoving }: IProps) {
	return (
		<div className="relative flex h-fit w-fit flex-col items-center justify-center">
			<div className={`flex flex-col items-center justify-center transition-all ${isMoving ? "-translate-y-[6px]" : ""}`}>
				<div className="relative z-[10] flex h-5 w-5 rounded-full border-2 border-gray-300 bg-primary">
					<div className="absolute left-1/2 top-1/2 flex h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300"></div>
				</div>
				<div className="-mt-[10px] flex h-6 w-0.5 rounded-s bg-[#212121cc]"></div>
			</div>
			<div className="-mt-[5px] flex h-2.5 w-2.5 rounded-full bg-[#2121211a]"></div>
		</div>
	);
}

export default Marker;
