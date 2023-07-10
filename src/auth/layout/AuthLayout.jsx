import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import PropTypes from 'prop-types'

export function AuthLayout ({ title, children }) {
  return (
    <Grid
      component='form'
      container
      sx={{ backgroundColor: 'white', p: 2, maxWidth: 'sm' }}
      spacing={3}
      justifyContent='end'
    >
      <Grid xs={12}>
        <Typography variant='h5' element='h2'>{title}</Typography>
      </Grid>
      {children}
    </Grid>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}
