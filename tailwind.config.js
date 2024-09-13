/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"]
}

