import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import GitHub from '@mui/icons-material/GitHub'
import Grid from '@mui/material/Unstable_Grid2'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { AuthLayout } from '../layout/AuthLayout'

export function LoginPage () {
  return (
    <AuthLayout title='Login'>
      <Grid xs={12} md={6}>
        <TextField
          placeholder='info@webferrol.com'
          autoFocus
          type='email'
          helperText='Su correo electrónico'
          fullWidth
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextField
          type='password'
          helperText='Contraseña de acceso'
          fullWidth
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Button
          fullWidth
          variant='contained'
        >
          Login
        </Button>
      </Grid>
      <Grid xs={12} md={6}>
        <Button
          fullWidth
          variant='contained'
        >
          <GitHub />
          <Typography sx={{ ml: 1 }}>Github</Typography>
        </Button>
      </Grid>
      <Grid>
        <Link component={RouterLink} to='/auth/register'>Registro</Link>
      </Grid>
    </AuthLayout>
  )
}
