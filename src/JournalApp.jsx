import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export function JournalApp () {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main'
      }}
    >
      <Typography variant='h4' element='h1' gutterBottom>JournalApp</Typography>
    </Grid>
  )
}
