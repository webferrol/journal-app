import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useTitle } from '../../hooks/useTitle'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Google from '@mui/icons-material/Google'
import Grid from '@mui/material/Unstable_Grid2'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FormLayout } from '../layout/FormLayout'
import { checkingAuthentication, signInWithPopup } from '../slices'
import { AUTH_STATUS } from '../../constants'

export function LoginPage () {
  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector(state => state.auth)
  const isAuthenticated = useMemo(() => status === AUTH_STATUS.authAuthenticated, [status])
  useTitle('Login')
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { email, password } = Object.fromEntries(formData.entries())
    dispatch(checkingAuthentication({ email, password }))
  }
  const handleGoogle = () => {
    dispatch(signInWithPopup())
  }
  return (
    <FormLayout title='Login' onSubmit={handleSubmit}>
      <Grid xs={12} md={6}>
        <TextField
          placeholder='info@webferrol.com'
          autoFocus
          type='email'
          name='email'
          required
          helperText='Su correo electrónico'
          fullWidth
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextField
          type='password'
          name='password'
          required
          helperText='Contraseña de acceso'
          fullWidth
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Button
          fullWidth
          variant='contained'
          type='submit'
          disabled={isAuthenticated}
        >
          Login
        </Button>
      </Grid>
      <Grid xs={12} md={6}>
        <Button
          fullWidth
          variant='contained'
          type='button'
          onClick={handleGoogle}
          disabled={isAuthenticated}
        >
          <Google />
          <Typography sx={{ ml: 1 }}>Google</Typography>
        </Button>
        {errorMessage && <Alert sx={{ mt: 1 }} severity='warning'>{errorMessage}</Alert>}
      </Grid>
      <Grid>
        <Link component={RouterLink} to='/auth/register'>Registro</Link>
      </Grid>
    </FormLayout>
  )
}
