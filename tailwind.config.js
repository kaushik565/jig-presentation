module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                molbio: {
                    red: '#dc2626',
                    'red-light': '#ef4444',
                    white: '#ffffff',
                    black: '#000000',
                    'gray-light': '#f3f4f6',
                    'gray-dark': '#374151',
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: '#374151',
                        a: {
                            color: '#dc2626',
                            '&:hover': {
                                color: '#ef4444',
                            },
                        },
                    },
                },
            },
        },
    },
    plugins: [],
}