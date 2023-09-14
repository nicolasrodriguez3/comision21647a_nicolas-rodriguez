/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/*.{html,js,css} ", "./src/views/*.ejs", "./src/views/partials/*.ejs"],
	theme: {
		extend: {},
	},
	plugins: [
		{
			tailwindcss: {},
			autoprefixer: {},
		},
	],
}

