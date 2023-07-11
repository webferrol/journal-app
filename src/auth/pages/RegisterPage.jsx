import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FormLayout } from '../layout/FormLayout'

export function RegisterPage () {
  return (
    <FormLayout title='Registro'>
      <Grid xs={12}>
        <TextField
          placeholder='Pepito de los Palotes'
          autoFocus
          type='text'
          helperText='Su nombre'
          fullWidth
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          placeholder='info@webferrol.com'
          type='email'
          helperText='Su correo electrónico'
          fullWidth
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          type='password'
          helperText='Contraseña de acceso'
          fullWidth
        />
      </Grid>
      <Grid xs={12}>
        <Button
          fullWidth
          variant='contained'
        >
          Registrar
        </Button>
      </Grid>
      <Grid>
        <Typography component='strong' sx={{ mr: 1 }}>¿Ya se encuentra registrado?</Typography>
        <Link component={RouterLink} to='/auth/login'>Login</Link>
      </Grid>
    </FormLayout>
  )
}
