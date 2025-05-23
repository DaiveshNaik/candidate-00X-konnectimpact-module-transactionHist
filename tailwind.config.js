/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-teal': '#00897B',
        'accent-lime': '#CDDC39',
        'neutral-white': '#FFFFFF',
        'neutral-light-gray': '#F3F4F6',      // A good light gray for backgrounds/cards
        'neutral-medium-gray': '#9CA3AF',   // For secondary text
        'neutral-dark-gray': '#374151',     // For dark theme backgrounds / primary text in light mode
        'neutral-black': '#1F2937',        // For dark theme cards / very dark elements
        'negative-red': '#EF4444', // Example: Tailwind's red-500 for negative points
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Body Text
        montserrat: ['Montserrat', 'sans-serif'], // Headlines
      },
      boxShadow: {
        soft: '0 4px 12px -1px rgba(0, 0, 0, 0.05), 0 2px 8px -2px rgba(0, 0, 0, 0.05)', // Softer, more modern shadow
        'card-hover': '0 10px 20px -3px rgba(0, 0, 0, 0.07), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), // If you add forms later
  ],
}



