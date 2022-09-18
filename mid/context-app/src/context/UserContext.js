import { createContext, useState, useContext } from 'react'

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const values = {
    user,
    setUser
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}
const useAuth = () => useContext(UserContext)
export { useAuth, UserProvider }