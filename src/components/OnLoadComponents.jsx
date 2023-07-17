import PropTypes from 'prop-types'
import { useVisibilityChange } from '../hooks'
import { useOnAuthStateChanged } from '../auth/hooks/'

export function OnLoadComponents ({ children }) {
  useVisibilityChange() // Cambiamos el favicon al perder el foco la página
  useOnAuthStateChanged() // Comprobamos si un usuario está logueado

  return children
}

OnLoadComponents.propTypes = {
  children: PropTypes.node
}
