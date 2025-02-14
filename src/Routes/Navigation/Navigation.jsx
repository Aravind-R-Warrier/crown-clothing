import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../Navigation/navigation.scss'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContextApi } from '../../Context/Context'
import { signOutUser } from '../../utils/firebase/firebase'

function Navigation() {
  const { currentUser } = useContext(UserContextApi); 

  const signOutHandler = async () => {
    if(window.confirm('Are you sure you want to logout')){
      await signOutUser()
    }
  
  }

  return (
    <>
      <div className='navigation'>
        <Link to={'/'} className='logo-container'>
          <CrwnLogo className='logo' />
        </Link>
        <div className="nav-links-container">

          <Link className="nav-link" to={'/shop'}>SHOP</Link>
          {currentUser ? <Link className="nav-link" onClick={signOutHandler} to={'/auth'}>SIGN OUT</Link> :
            <Link className="nav-link" to={'/auth'}>SIGN IN</Link>

          }
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
