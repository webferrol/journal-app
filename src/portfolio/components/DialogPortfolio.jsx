import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'

export function DialogPortfolio ({ message, onClose }) {
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      open
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        Guardar cambios
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  )
}

DialogPortfolio.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func
}
