import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js", // Add Flowbite content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite], // Add Flowbite as a plugin
};
