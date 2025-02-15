import React from "react";
import Image from "next/image";

function Header() {
	return (
		<header className="sticky top-0 bg-white shadow-sm">
			<div className="mx-auto flex max-w-[1200px] items-center justify-between p-3">
				<h1 className="hidden">Snapp Shop</h1>
				<Image src={"/images/webp/text-logo.webp"} alt="text-logo" width={72} height={40} />
				<button
					type="button"
					className="flex h-10 items-center justify-center gap-1 rounded border px-3 py-1 text-sm font-bold text-[var(--ss-font-default)] transition hover:bg-gray-100"
				>
					<Image src={"/images/svg/user.svg"} alt="user" width={24} height={24} />
					پوریا عطایی
				</button>
			</div>
		</header>
	);
}

export default Header;
