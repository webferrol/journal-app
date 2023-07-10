import Grid from '@mui/material/Grid'
import { Outlet } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export function AppLayout () {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{
        minHeight: '100vh',
        padding: '1rem',
        backgroundColor: 'primary.main'
      }}
    >
      <Outlet />
    </Grid>
  )
}
