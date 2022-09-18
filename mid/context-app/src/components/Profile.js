import React, { useContext, useState } from 'react'
import {useAuth} from '../context/UserContext'
function Profile() {
  const { user, setUser } = useAuth()
  const [loading, setLoading] = useState(false)
  const handleLogin = () => {
    setLoading(x => !x)
    setTimeout(() => {
      setUser({ id: 1, username: 'odem', bio: 'lorem ipsum' })
      setLoading(x => !x)
    }, 1500)
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <>
      {!user &&
        <button onClick={handleLogin}>{loading ? 'loading...' : 'Login'}</button>
      }
      <br />
      <code>{JSON.stringify(user)}</code>
      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
    </>
  )
}

export default Profile