import React from 'react'
import '../Catagory-item/Catagory-item.scss'

function CatagoryItem({catagory}) {
    const{imageUrl,title}=catagory

  return (
    <>
       <div className="category-container">
          <div className="background-image" style={{
            backgroundImage:`url(${imageUrl})`
          }}/>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    </>
  )
}

export default CatagoryItem
