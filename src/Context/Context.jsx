import React, { createContext, useEffect, useState } from 'react'
import { onAuthStateChangedListner,createUserDocumentFromAuth } from '../utils/firebase/firebase'


export const UserContextApi = createContext()


function Context({ children }) {
  useEffect(() => {
    const unSubcribe = onAuthStateChangedListner((user) => {
      // console.log(user)
      if(user){
         createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
return unSubcribe
  }, [])


  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  return (
    <UserContextApi.Provider value={value}>
      {children}
    </UserContextApi.Provider>
  )
}

export default Context
