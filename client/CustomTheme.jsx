const CustomTheme = {
   zIndex: {
      typography: 1,
      drawer: 1,
      box: 1,
   },
   palette: {
      type: 'dark',
      primary: {
         main: '#0a1929',
      },
      secondary: {
         main: '#5dfdcb',
      },
      neutral: {
         main: '#d5e0ea',
      },
      contrast: {
         main: '#F3C969',
      },
      background: {
         default: '#2A2A2A',
         paper: '#0a1929',
      },
      text: {
         primary: '#d5e0ea',
         secondary: '#d5e0ea',
      },
      divider: '#4E5558',
      textfield: '#d5e0ea',
   },
   typography: {
      fontFamily: '"Open Sans",  sans-serif',
      // h1 is used for landing page title
      h1: {
         fontSize: '1rem',
         fontWeight: 600,
      },
      h2: {
         fontSize: '3rem',
         fontWeight: 800,
      },
      h3: {
         fontSize: '2rem',
         fontWeight: 700,
      },
      body1: {
         fontSize: '1rem',
         fontWeight: 400,
      },
      body2: {
         fontSize: '1.2rem',
         fontWeight: 400,
         '@media (min-width:600px)': {
            fontSize: '1rem',
         },
      },
      subtitle1: {
         fontSize: '1rem',
      },
      subtitle2: {
         fontSize: '1rem',
         fontFamily: 'JetBrains Mono',
         fontWeight: 600,
      },
   },
};

export default CustomTheme;
