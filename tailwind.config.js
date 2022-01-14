module.exports = {
    content: ['./app/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
				accent: {
					'800': 'rgba(241,85,88,1)',
				},
				dark: {
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#353535',
					500: '#202020',
					600: '#181818',
					700: '#141414',
					800: '#121212',
					900: '#101010',
				},
            },
        },
		fontFamily: {
			body: ['Rubik'],
		},
    },
    plugins: [],
}
