import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Home from '@mui/icons-material/Home'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export function FormLayout ({ title, children }) {
  return (
    <Box maxWidth='50ch' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <Grid
        component='form'
        container
        sx={{ backgroundColor: 'white', p: 2, maxWidth: 'sm', borderRadius: 2 }}
        spacing={3}
        justifyContent='end'
      >
        <Grid xs={12}>
          <Typography variant='h5' element='h2'>{title}</Typography>
        </Grid>
        {children}
      </Grid>
      <Link sx={{ color: 'white' }} component={RouterLink} to='/'><Home /></Link>
    </Box>
  )
}

FormLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}
