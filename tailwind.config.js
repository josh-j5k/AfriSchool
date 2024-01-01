module.exports = {
	content: ["./src/**/*.{html,js,vue}"],
	darkMode: ["class"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "system-ui", "sans-serif"],
			},
			screens: {
				"-2xl": { max: "1535px" },
				// => @media (max-width: 1536px) { ... }
				"-xl": { max: "1279px" },
				// => @media (max-width: 1279px) { ... }
				"-lg": { max: "1023px" },
				// => @media (max-width: 1023px) { ... }
				"-md": { max: "769px" },
				// => @media (max-width: 769px) { ... }
				"-sm": { max: "639px" },
				// => @media (max-width: 639px) { ... }
				tablet: { min: "639px", max: "1023px" },
				// => @media (width: > 639 <= 1023) { ... }
			},
			colors: {
				"primary-dark": "#111111",
				primary: "#F4F4F4",
				"aside-dark": "#000",
				aside: "#fff",
				accent: "#F36C33",
				"card-dark-bg": "#1D1F22",
				"accent-light": "#FF6F3226",
				blue: "#0095FF",
				"blue-light": "#CDE7FF",
				green: "#04CE8B",
				"green-light": "#8CFAC7",
				purple: "#6C33F3",
			},
			content: {
				string: "''",
			},
		},
	},
	plugins: [],
}
