/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1368EC',
            },
            fontFamily: {
                display: ['"Noto Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}