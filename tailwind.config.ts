import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FFFFFF",
				secondary: "#000000",
				accent: "#e9cf7a",
				blight: "#",
				bdark: "#",

				color1: "#cb8b35",
				color2: "#353535",
				color3: "#feb93e",
				color4: "#",
				color5: "#",
				color6: "#",
				color7: "#",
				color8: "#",
			},
		},
	},
	plugins: [],
};
export default config;
