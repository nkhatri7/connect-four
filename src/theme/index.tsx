import { createTheme } from "@mui/material";
import SpaceGroteskMedium from '../assets/fonts/SpaceGrotesk-Medium.ttf';
import SpaceGroteskBold from '../assets/fonts/SpaceGrotesk-Bold.ttf';

const theme = createTheme({
  typography: {
    fontFamily: 'SpaceGrotesk, Roboto, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          @font-face {
            font-family: 'SpaceGrotesk';
            font-style: normal;
            font-display: swap;
            font-weight: 500;
            src: local('SpaceGrotesk'), url(${SpaceGroteskMedium}) 
              format('truetype');
          }
          
          @font-face {
            font-family: 'SpaceGrotesk';
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src: local('SpaceGrotesk'), url(${SpaceGroteskBold}) 
              format('truetype');
          }
        }
      `,
    },
  }
});

export default theme;