module.exports = {
    content: ['./app/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
				light: {
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#c6cbd2',
					500: '#202020',
					600: '#b8bec7',
					700: '#8d97a5',
					800: '#707c8f',
					900: '#101010',
				},
				dark: {
					500: '#262626',
					600: '#222222',
					700: '#181818',
					800: '#141414',
					850: '#121212',
					900: '#101010',
				}
            },
        },
		fontFamily: {
			body: ['Rubik'],
		},
    },
    plugins: [],
}
