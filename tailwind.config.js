import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
	theme: {
		boxShadow: {
			'3xl': '0 0 5px rgba(0, 0, 0, 0.5)',
		}
	},
	plugins: [daisyui],
};
