import { useAuth } from 'react-oidc-context'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function AuthCallback() {
  const auth = useAuth()

  if (auth.isLoading) {
    return <div>Loading...</div>
  }

  if (auth.error) {
    return <div>Error: {auth.error.message}</div>
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/" />
  }

  return <div>Processing authentication...</div>
}

export default AuthCallback