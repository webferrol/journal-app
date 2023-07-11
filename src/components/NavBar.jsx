import AccountCircle from '@mui/icons-material/AccountCircle'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import MenuOutlined from '@mui/icons-material/MenuOutlined'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export function NavBar ({ drawerWidth = 240 }) {
  return (
    <AppBar
      position='fixed'
      sx={
        {
          /* En pantallas mas pequeñas que "sm" estas reglas no se cumplen */
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }
      }
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Typography
            variant='h6'
            component='div'
          >
            Webferrol
          </Typography>
          <IconButton color='inherit'>
            <AccountCircle />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  drawerWidth: PropTypes.number
}
