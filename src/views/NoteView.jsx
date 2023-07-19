import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import { TextField } from '@mui/material'
import { useForm } from '../hooks'
import PropTypes from 'prop-types'
import { updateWorkExperience } from '../portfolio/slice'

export function NoteView ({ form }) {
  const dispatch = useDispatch()
  const { title, description, handleChange } = useForm(form)

  const date = useMemo(() => new Date(form?.date).toLocaleDateString(), [form?.date])
  const handleSubmit = e => {
    e.preventDefault()
    const { target } = e
    const formData = new FormData(target)
    const data = Object.fromEntries(formData.entries())
    dispatch(updateWorkExperience(form?.uid, { ...form, ...data }))
  }

  return (
    <Grid
      onSubmit={handleSubmit}
      component='form'
      container spacing={2}
      alignItems='center'
      justifyContent='space-between'
    >
      <Grid xs={12} md={6}>
        <Typography variant='h6' component='h2'>
          {form?.title}
        </Typography>
      </Grid>
      <Grid xs={12} md={6}>
        <Typography component='strong'>
          {date}
        </Typography>
      </Grid>
      <Grid xs={12}>
        <TextField
          placeholder='Pepito de los Palotes'
          autoFocus
          required
          type='text'
          label='Título'
          fullWidth
          name='title'
          value={title}
          onChange={handleChange}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          placeholder='Pepito de los Palotes'
          autoFocus
          multiline
          rows={4}
          type='text'
          label='Descripción'
          fullWidth
          name='description'
          value={description}
          onChange={handleChange}
        />
      </Grid>
      <Grid xs={12}>
        <Button type='submit' variant='outlined' startIcon={<SaveIcon />}>Guardar</Button>
      </Grid>
    </Grid>
  )
}

NoteView.propTypes = {
  form: PropTypes.any
}
