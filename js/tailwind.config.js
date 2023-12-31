tailwind.config = {
    theme: {
      extend: {
        screens: {
          'xs': '400px',
          'sm': '576px',
          'md': '768px',
          'lg': '992px',
          'xl': '1200px',
          '2xl': '1400px',
          '3xl': '1600px',
        },
        colors: {
          navbg: '#0D0D0D',
          primary: '#FFD2A4',
          navbtn: '#1C1D28',
          black: '#161722',
          boxbg: '#FFF5EB'
        },
        maxWidth: {
          'container': '1600px',
        },
        fontWeight: {
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
        },
        fontFamily: {
           'Roboto-condensed': "Roboto Condensed, sans-serif",
        },
        backgroundImage: {
            'banner': "url('images/banner.jpg')",
            'overlay': 'linear-gradient(40deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%);',
            'bgworld': "url('images/worldbg.jpg')",
        },
        fontSize: {
          'fonthead': '64px',
          'fontsubhead': '48px',

        }
    }
  }
}