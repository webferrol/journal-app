import { Link as LinkReact } from 'react-router-dom'
import Link from '@mui/material/Link'
import ProTip from '../components/ProTip'

export function NothingSelectedView () {
  return (
    <>
      <ProTip>
        Consejo: Crea una nueva o <Link component={LinkReact} to='/auth'>logueate</Link>.
      </ProTip>
    </>
  )
}
