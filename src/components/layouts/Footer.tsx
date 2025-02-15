import Image from "next/image";
import React from "react";

function Footer() {
	return (
		<footer className="bg-gray-300 text-sm leading-5">
			<div className="mx-auto flex max-w-[1200px] items-center justify-between gap-2 p-3">
				<span className="text-sm">کلیه حقوق استفاده از محتوای این وب سایت نزد اسنپ شاپ محفوظ است.</span>
				<div className="flex items-center gap-3">
					<a
						target="_blank"
						href="https://www.instagram.com/snappshop_official"
						type="button"
						className="flex h-8 w-8 items-center justify-center rounded bg-gray-400 transition hover:opacity-70"
						rel="noreferrer"
					>
						<Image src={"/images/svg/instagram.svg"} alt="instagram" className="invert" width={24} height={24} />
					</a>
					<a
						target="_blank"
						href="https://www.linkedin.com/company/snappshop"
						type="button"
						className="flex h-8 w-8 items-center justify-center rounded bg-gray-400 transition hover:opacity-70"
						rel="noreferrer"
					>
						<Image src={"/images/svg/linkedin.svg"} alt="linkedin" className="invert" width={24} height={24} />
					</a>
					<a
						target="_blank"
						href="https://twitter.com/snapp_shop"
						type="button"
						className="flex h-8 w-8 items-center justify-center rounded bg-gray-400 transition hover:opacity-70"
						rel="noreferrer"
					>
						<Image src={"/images/svg/twitter.svg"} alt="twitter" className="invert" width={24} height={24} />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
