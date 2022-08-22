/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			ringWidth: {
				1: "1px",
			},
		},
	},
	plugins: [],
};
