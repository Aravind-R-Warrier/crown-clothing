import React from 'react'
import { signInWithGooglePopUp,createUserDocumentFromAuth } from '../../utils/firebase/firebase'


function SignIn() {
  const logGoogleUser=async()=>{
    const {user}=await signInWithGooglePopUp()
   const userDocRef= await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>sign in popup</button>
    </div>
  )
}

export default SignIn
