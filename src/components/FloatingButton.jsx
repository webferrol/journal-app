import IconButton from '@mui/material/IconButton'
import AddOutlined from '@mui/icons-material/AddOutlined'
export function FloatingButton () {
  return (
    <IconButton
      sx={
      {
        backgroundColor: 'error.main',
        color: '#fff',
        fontSize: '2ch',
        position: 'fixed',
        bottom: '2ch',
        right: '2ch',
        ':hover': { backgroundColor: 'error.main', opacity: '.5' }

      }
    }
    >
      <AddOutlined />
    </IconButton>
  )
}
