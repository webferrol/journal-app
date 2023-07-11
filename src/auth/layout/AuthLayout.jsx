import Grid from '@mui/material/Grid'
import { Outlet } from 'react-router-dom'

export function AuthLayout () {
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
