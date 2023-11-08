import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "purple": "#5A1EEC",
        "white": "#FFFFFF",
        "aqua": "#0AFFBA",
        "green-650": "#26cd23",
        "zinc-350": "#d8dee4",
        "violet-650": "#662ef5"
      }
    },
    
  },
  plugins: [],
}
export default config
