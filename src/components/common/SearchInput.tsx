import React from "react";
import Image from "next/image";

function SearchInput() {
	return (
		<div className="relative flex w-full items-center">
			<input type="text" className="h-10 w-full rounded border p-3 pr-10 shadow-sm outline-none" placeholder="جستجو در تهران" />
			<Image src="/images/svg/search.svg" alt="search" width={16} height={16} className="absolute right-3 top-1/2 -translate-y-1/2" />
		</div>
	);
}

export default SearchInput;
