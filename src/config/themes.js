import red from '@mui/material/colors/red'
import green from '@mui/material/colors/green'
import pink from '@mui/material/colors/pink'

const themes = [
  {
    id: 'default',
    source: {
      typography: {
        fontFamily: "'Manrope', sans-serif",
        textTransform: "none",
      }
    },
  },
  {
    id: 'red',
    color: red[500],
    source: {
      palette: {
        primary: red,
        secondary: pink,
        error: red,
      },
      typography: {
        fontFamily: "'Manrope', sans-serif",
        textTransform: "none",
      }
    },
  },
  {
    id: 'green',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: red,
        error: red,
      },
      typography: {
        fontFamily: "'Manrope', sans-serif",
        textTransform: "none",
      }
    },
  },
]

export default themes
