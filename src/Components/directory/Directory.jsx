import React from 'react'
import '../directory/directory.scss'
import CatagoryItem from '../Catagory-item/CatagoryItem'


function Directory({catagories}) {
    
  return (
    <>
        <div className="directory-container">
      {catagories.map(( catagory ) => (
        <CatagoryItem key={catagory.id} catagory={catagory} />
      ))
      }
    </div>
    </>
  )
}

export default Directory
