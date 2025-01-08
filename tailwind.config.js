/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2',
        'light-blue': 'var(--clr-light-blue)',
        'dark-blue': 'var(--clr-dark-blue)',
      },  
      gridTemplateColumns: {
        25: 'repeat(25, minmax(0, 1fr))',
        27: 'repeat(27, minmax(0, 1fr))', 
      },
      gridColumnStart: {
        27: '27', // Allows `col-start-27` class
      },
    },
    fontFamily: {
      'display': ['Poppins','sans-serif'],
      'body': ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}

