// src/styles/theme.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
    },
  },
  typography: {
    fontFamily: 'Georgia, serif',
  },
})

export default theme
