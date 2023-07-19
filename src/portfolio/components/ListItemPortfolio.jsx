import CommentIcon from '@mui/icons-material/Comment'
import ListItemButton from '@mui/material/ListItemButton'
import ListItem from '@mui/material/ListItem'
import { useDispatch } from 'react-redux'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PropTypes from 'prop-types'
import { selectWorkExperienceActive } from '../slice'

export function ListItemPortfolio ({ idDoc, title, description }) {
  const dispatch = useDispatch()
  return (
    <ListItem
      onClick={() => dispatch(selectWorkExperienceActive(idDoc))}
      disablePadding
    >
      <ListItemButton>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary={title} secondary={description} />
      </ListItemButton>
    </ListItem>
  )
}

ListItemPortfolio.propTypes = {
  idDoc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}
