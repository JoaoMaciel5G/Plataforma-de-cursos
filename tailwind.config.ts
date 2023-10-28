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
        "greenGreat": "#26cd23"
      }
    },
    
  },
  plugins: [],
}
export default config
