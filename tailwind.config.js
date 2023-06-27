/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/layouts/**/*.{ts,tsx}',
    './src/app/pages/**/*.{ts,tsx}',
    './src/app/*.{css}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
}
