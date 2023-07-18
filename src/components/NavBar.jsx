import { useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar'
import AccountCircle from '@mui/icons-material/AccountCircle'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import MenuOutlined from '@mui/icons-material/MenuOutlined'
import Typography from '@mui/material/Typography'
import { signOut } from '../auth/slices'
import PropTypes from 'prop-types'

export function NavBar ({ drawerWidth = 240, dataUser }) {
  const dispatch = useDispatch()
  const { status, user } = dataUser
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
          <IconButton color='inherit' onClick={() => dispatch(signOut())}>
            {
              status && user?.photoURL
                ? <Avatar alt={user.displayName} src={user.photoURL} />
                : <AccountCircle />
            }
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  drawerWidth: PropTypes.number,
  dataUser: PropTypes.object
}
