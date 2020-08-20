import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance. 808B96 DC7633 1C2833
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#DC7633'
    },
    secondary: {
      main: '#4FD555'
    },
    error: {
      main: red.A400,
    },
    type: 'dark'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/bg.jpg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backdropFilter: 'blur(3px)'
        },
        '*::-webkit-scrollbar': {
          width: '5px',
        },
        '*::-webkit-scrollbar-thumb': {
          background: '#ddd',
        },
        '*::-webkit-scrollbar-track': {
          background: '#666',
        }
      }
    },
    MuiLink: {
      root: {
        cursor: 'pointer'
      }
    }
  }
})

export default theme
