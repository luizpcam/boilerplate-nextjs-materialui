import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme: ThemeOptions = createMuiTheme({
  typography: {
    fontFamily: 'Roboto, Arial'
  },
  palette: {
    primary: {
      main: '#fcfcfc'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
})

export default theme
