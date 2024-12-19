import React from 'react'
import SIgnUp from '../../Components/sign-Up/SIgnUp'
import SIgnIn from '../../Components/Sign-In/SIgnIn'
import '../Authentication/authentication.scss'

function Authentication() {
  return (
    <div className='authentication-container'>
      
      <SIgnIn/>
      <SIgnUp/>
    </div>
  )
}

export default Authentication
