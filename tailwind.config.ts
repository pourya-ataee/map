import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		screens: {
			mobile: "378px",
			tablet: "591px",
		},
		extend: {
			colors: {
				primary: "#b400ae",
				gray: {
					300: "#e0e0e0",
					400: "#bdbdbd",
					700: "#616161",
				},
			},
		},
	},
	plugins: [],
};
export default config;
