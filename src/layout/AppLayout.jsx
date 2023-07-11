import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function AppLayout () {
  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        alignItems: 'start'
      }}
    >
      {/* Navbar */}
      <NavBar drawerWidth={240} />

      {/* Sidebar */}

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Outlet />
      </Box>
    </Grid>
  )
}
