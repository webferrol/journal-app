import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { SideBar } from '../components/SideBar'
import { FloatingButton } from '../components/FloatingButton'

export function AppLayout () {
  return (
    <Grid
      container
      alignItems='start'
    >
      <NavBar drawerWidth={240} />
      {/* NavBar position: fixed */}
      <SideBar drawerWidth={240} />
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
      <FloatingButton />
    </Grid>
  )
}
