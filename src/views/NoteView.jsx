import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save'

export function NoteView () {
  return (
    <Grid component='div' container spacing={2} alignItems='center' justifyContent='space-between'>
      <Grid xs={3}>
        <Typography>
          Título
        </Typography>
      </Grid>
      <Grid xs={3}>
        <Button variant='outlined' startIcon={<SaveIcon />}>Guardar</Button>
      </Grid>
    </Grid>
  )
}
