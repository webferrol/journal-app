import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useForm } from '../../hooks/useForm'
import { FormLayout } from '../layout/FormLayout'
import { FORM_VALIDATE } from '../../constants'

export function RegisterPage () {
  const { displayName, displayNameValid, email, emailValid, password, passwordValid, handleChange, isValidForm } = useForm({ displayName: '', email: '', password: '' }, FORM_VALIDATE)
  const [isHandleSubmit, setIsHandleSubmit] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    setIsHandleSubmit(true)
    if (isValidForm) return 'Enviar formulario'
  }
  return (
    <FormLayout title='Registro' onSubmit={handleSubmit}>
      {JSON.stringify(isHandleSubmit.current)}
      <Grid xs={12}>
        <TextField
          placeholder='Pepito de los Palotes'
          autoFocus
          type='text'
          label='Su nombre'
          fullWidth
          name='displayName'
          value={displayName}
          onChange={handleChange}
          helperText={displayNameValid}
          error={!!displayNameValid && isHandleSubmit}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          placeholder='info@webferrol.com'
          type='email'
          label='Su correo electrónico'
          fullWidth
          name='email'
          value={email}
          onChange={handleChange}
          helperText={isHandleSubmit && emailValid}
          error={!!emailValid && isHandleSubmit}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          type='password'
          label='Contraseña de acceso'
          fullWidth
          name='password'
          value={password}
          onChange={handleChange}
          helperText={passwordValid}
          error={!!passwordValid && isHandleSubmit}
        />
      </Grid>
      <Grid xs={12}>
        <Button
          fullWidth
          variant='contained'
          type='submit'
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
