module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
  ],
	darkMode: 'class',
  theme: {
		extend: {
			colors: {
				'dark': '#1E273B',
				'light': '#f3f3f3',
				'accent': '#FF4A6B',
				'item-dark': '#28334c',
				'item-light': '#ddd',
			},
			fontFamily: {
				sansSerif: ['Tahoma, sans-serif'],
				serif: ['IBM Plex Mono', 'serif'],
				mono: ['Dank Mono', 'monospace']
			},
			fontSize: {
				h1: '30px',
				h2: '25px',
				h3: '20px',
				body: '18px',
			},
			spacing: {
				section: '40px',
			},
		},
  },
  plugins: [],
}
