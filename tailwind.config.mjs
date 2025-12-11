/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Cairo', 'sans-serif'],
            },
            colors: {
                athek: {
                    primary: '#0F2C59', // Placeholder Deep Blue
                    secondary: '#DAC0A3', // Placeholder Gold/Beige
                    accent: '#e63946',
                    light: '#F8F9FA'
                }
            }
        },
    },
    plugins: [],
}
