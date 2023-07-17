import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AUTH_STATUS } from '../constants'
export function ProtectedRoute ({ children }) {
  const { status } = useSelector(state => state.auth)
  if (status === AUTH_STATUS.authAuthenticated) return <Navigate to='/' replace />
  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node
}
