import CommentIcon from '@mui/icons-material/Comment'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export function SideBar ({ drawerWidth = 240 }) {
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
            Xurxo González
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CommentIcon />
              </ListItemIcon>
              <ListItemText primary='Uno' secondary='Lorem ipsum mola' />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Grid>
  )
}

SideBar.propTypes = {
  drawerWidth: PropTypes.number
}
