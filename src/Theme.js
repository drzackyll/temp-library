// import { createTheme } from '@mui/material';

// const theme = createTheme({
//   typography: {
//     fontFamily: ["IBM Plex Sans", "sans-serif"].join(",")
//   }
// });

// export default theme;

export const getDesignTokens = (mode) => ({
  typography: {
    useNextVariants: true,
    fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
    fontSize: 14
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '14px'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: '#F2F2F2',
          hover: '#E6E6E6',
          level4: '#CCCCCC',
          level3: '#E6E6E6',
          level2: '#F2F2F2',
          level1: '#FFFFFF',
          disabled: '#808080',
        },
        inverse: {
          main: '#FFFFFF',
          hover: '#453D51',
          level4: '#4F465D',
          level3: '#453D51',
          level2: '#332D3C',
          level1: '#26222D',
          disabled: '#808080',
        },
        secondary: {
          main: '#332D3C',
          hover: '#453D51',
          disabled: '#B3B3B3',
        },
        success: { main: '#34CB81' },
        warning: { main: '#FFD700' },
        alert: { main: '#F82A2A' },
        optimalblue: { main: '#2D6BFF' },
        background: {
          default: '#FFFFFF',
          dark: '#26222D'
        },
        text: {
          primary: '#000000',
          dark: '#FFFFFF',
          disabled: '#B3B3B3',
          unselected: '#808080',
          inverse: '#FFFFFF',
        },
        action: {
          active: '#F2F2F2',
          hover: '#E6E6E6',
          disabled: '#808080',
          selectedOpactiy: 1
        }
      }
      : {
        // palette values for dark mode
        primary: {
          main: '#FFFFFF',
          hover: '#453D51',
          level4: '#4F465D',
          level3: '#453D51',
          level2: '#332D3C',
          level1: '#26222D',
          disabled: '#808080',
        },
        inverse: {
          main: '#F2F2F2',
          hover: '#E6E6E6',
          level4: '#CCCCCC',
          level3: '#E6E6E6',
          level2: '#F2F2F2',
          level1: '#FFFFFF',
          disabled: '#808080',
        },
        success: { main: '#34CB81' },
        warning: { main: '#FFD700' },
        alert: { main: '#F82A2A' },
        optimalblue: { main: '#2D6BFF' },
        background: {
          default: '#26222D',
          paper: '#26222D',
        },
        text: {
          primary: '#FFFFFF',
          disabled: '#B3B3B3',
          unselected: '#E6E6E6',
          inverse: '#000000',
        },
        action: {
          active: '#FFFFFF',
          hover: '#453D51',
          disabled: '#808080',
          selectedOpactiy: 1
        }
      }),
  },
});
