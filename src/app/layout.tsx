import { ReactNode } from "react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const Header = dynamic(() => import("@/components/layouts/Header"));
const Footer = dynamic(() => import("@/components/layouts/Footer"));

export const metadata: Metadata = {
	title: "SnappShop - Map",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="fa" dir="rtl">
			<body>
				<Header />
				<main className="mx-auto flex min-h-[calc(100dvh-120px)] max-w-[1200px] items-center justify-between p-3 max-tablet:min-h-[calc(100dvh-128px)] max-mobile:min-h-[calc(100dvh-148px)]">
					{children}
				</main>
				<Footer />
				<ToastContainer
					rtl
					stacked
					draggable
					closeOnClick
					pauseOnHover
					autoClose={5000}
					newestOnTop={false}
					position="bottom-left"
					hideProgressBar={false}
					pauseOnFocusLoss={false}
				/>
			</body>
		</html>
	);
}
