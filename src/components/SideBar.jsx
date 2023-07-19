import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { ListItemPortfolio } from '../portfolio/components'
import PropTypes from 'prop-types'

export function SideBar ({ drawerWidth = 240, dataUser, experiences = [] }) {
  const { status, user } = dataUser
  return (
    <Grid
      container
      component='nav'
      sx={
        {
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 }
        }
      }
    >
      <Drawer
        open
        variant='permanent'
        sx={
          {
            '& .MuiDrawer-paper': { width: drawerWidth }
          }
        }
      >
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
          >
            {status && user?.displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {
            experiences?.map(item => (
              <ListItemPortfolio key={item.idDoc} {...item} />
            ))
          }
        </List>
      </Drawer>
    </Grid>
  )
}

SideBar.propTypes = {
  drawerWidth: PropTypes.number,
  dataUser: PropTypes.object,
  experiences: PropTypes.array
}
