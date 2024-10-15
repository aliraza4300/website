/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOutDown: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(10px)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.3s ease-out',
        fadeOutDown: 'fadeOutDown 0.3s ease-out',
      },
      fontFamily: {
        'dm-sans': ["DM Sans", 'sans-serif'],
        "sora": ['Sora', 'sans-serif'],
      },
      colors:{
        green:"#9CEE69",
      },
      width: {
        '175': '175px', 
      },
      transitionDelay: {
        '0': '0ms',    
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
      },
      translate: {
        '4': '10px', 
      },
      screens: {
        'custom': {'max': '1399px'}, 
        'custom-990': {'max': '990px'}, 
      },
      backgroundImage: {
        'custom-map': "url('./images/bg-map.png')",
      },
      height: {
        '80vh': '80vh',
      },
      fontSize: {
        '135px': '135px',
        '26px': '26px',
      },
      zIndex: {
        '1': '1',
        '2': '2',
      },
      width: {
        '1300': '1300px', 
      },
      padding: {
        '480': '480px', 
      },
      margin: {
        'negative-16': '-16px', 
        'negative-5': '-5%', 
      },
      lineHeight: {
        '1.3': '1.3em', 
      },
      borderRadius: {
        '40': '40px',
      },
    },
  },
  plugins: [],
}

