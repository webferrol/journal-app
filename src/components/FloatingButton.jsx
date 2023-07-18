import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import AddOutlined from '@mui/icons-material/AddOutlined'
import { addWorkExperience } from '../portfolio/slice/'
export function FloatingButton () {
  const dispatch = useDispatch()
  const { isSaving } = useSelector(state => state.portfolio)
  return (
    <IconButton
      onClick={() => dispatch(addWorkExperience())}
      disabled={isSaving}
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
