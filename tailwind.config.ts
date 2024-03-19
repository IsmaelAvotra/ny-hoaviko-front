import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FEFEFE',
      yellow: '#FFFBBD',
      black: '#050F1D',
      green: '#386641',
      blackPurple: '#02182B',
      red: '#EE353E',
    },
    extend: {},
  },
  plugins: [],
}
export default config
