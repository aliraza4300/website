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
        "poppins": ['Poppins', 'sans-serif'],
      },
      colors:{
        green:"#9CEE69",
        'custom-gray': '#D9D9D9',
        'custom-gray-75': '#757575',
        'custom-light-gray': '#f1f1f1',
        'custom-light-gray-border': '#FFFFFF30',
        'black-rgba-10': 'rgba(0, 0, 0, 0.1)',
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
        'custom-620': {'max': '620px'}, 
      },
      backgroundImage: {
        'custom-map': "url('./images/bg-map.png')",
        'custom-playvideo': "url('./images/PlayVideo.jpg')",
      },
      height: {
        '80vh': '80vh',
        '170': '170px', 
        '100px':'100px',
        '52':'100px',

      },
      fontSize: {
        '135px': '135px',
        '26px': '26px',
        '80': '80px',
        '55': '55px',
        '150': '150px', 
        '46': '46px', 
      },
      zIndex: {
        '1': '1',
        '2': '2',
      },
      width: {
        '1300': '1300px', 
        '175': '175px', 
        '170': '170px',
        '9/10': '90%',
        '100px': '100px',
        
      },
      maxWidth: {
        '1300': '1300px', 
      },
      padding: {
        '480': '480px', 
        '230': '230px', 
      },
      margin: {
        'negative-16': '-16px', 
        'negative-5': '-5%', 
        '5p': '5%',  
        '30p': '30%',
        '18p': '18%',
      },
      lineHeight: {
        '1.3': '1.3em', 
      },
      borderRadius: {
        '40': '40px',
        '25': '25px',
      },
      inset: {
        'negative-40': '-40px', 
      },
      opacity: {
        '7': '0.07', 
      },
      textStroke: {
        '1': '1px black', 
      },
    },
  },
  plugins: [],
}

