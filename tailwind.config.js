/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				black: "#000000",
				zeus: "#222222",
				davy: "#555555",
				concord: "#777777",
				grey: "#999999",
				amour: "#EEEEEE",
				bianca: "#FAFAFA",
				white: "#FFFFFF",
				golden: "#FFAA00",
				pumpkin: "#FD7702",
				folly: "#FF0066",
				ruddy: "#FE0222",
				magenta: "#FF00EE",
				violet: "#9900FF",
				indigo: "#6600FF",
				ultramarine: "#1300FF",
				azure: "#0099FF",
				aqua: "#00CCFF",
				cyan: "#22DDDD",
				error: "#EF3934",
				warning: "#FFB400",
				success: "#44C95B",
				info: "#2F86EB",
			},
		},
	},
	plugins: [],
};
