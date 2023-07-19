import CommentIcon from '@mui/icons-material/Comment'
import ListItemButton from '@mui/material/ListItemButton'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PropTypes from 'prop-types'

export function ListItemPortfolio ({ title }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary={title} secondary='Lorem ipsum mola' />
      </ListItemButton>
    </ListItem>
  )
}

ListItemPortfolio.propTypes = {
  title: PropTypes.string
}
