import { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import { DialogPortfolio } from '../portfolio/components'
import { useForm } from '../hooks'
import { setSaveMessage, updateWorkExperience } from '../portfolio/slice'
import PropTypes from 'prop-types'
import { IconButton } from '@mui/material'

export function NoteView ({ form }) {
  const [showModal, setShowModal] = useState(false)
  const inputFileRef = useRef()
  const dispatch = useDispatch()
  const { errorMessage, isSaving, saveMessage } = useSelector(state => state.portfolio)
  const { title, description, handleChange } = useForm(form)

  useEffect(() => {
    if (saveMessage.length) {
      setShowModal(true)
    }
  }, [saveMessage])

  const handleClose = () => {
    dispatch(setSaveMessage(''))
    setShowModal(false)
  }

  const handleFileInput = ({ target }) => {
    const { length = 0 } = target.files
    if (!length) return
    console.log('Ahí imos')
  }

  const date = useMemo(() => new Date(form?.date).toLocaleDateString(), [form?.date])
  const isError = useMemo(() => Boolean(errorMessage), [errorMessage])
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
          error={isError}
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
          error={isError}
        />
      </Grid>
      <Grid xs={12}>
        <Button type='submit' disabled={isError || isSaving} variant='outlined' startIcon={<SaveIcon />}>Guardar</Button>
        <IconButton onClick={() => inputFileRef.current.click()}>
          <SaveIcon />
          <input
            type='file'
            style={{ display: 'none' }}
            ref={inputFileRef}
            onChange={handleFileInput}
            multiple
          />
        </IconButton>
      </Grid>
      <Grid xs={12}>
        {isError && <Alert sx={{ mt: 1 }} severity='warning'>{errorMessage}</Alert>}
        {showModal && <DialogPortfolio onClose={handleClose} message={saveMessage} />}
      </Grid>
    </Grid>
  )
}

NoteView.propTypes = {
  form: PropTypes.any
}
