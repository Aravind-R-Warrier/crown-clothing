import React from 'react'
import '../Button/Button.scss'
// defaultButton
// invertedButton
// GoogleSignInButton


const buttonTypesClasses={
    google:"google-sign-in",
    inverted:"inverted"
}

function Button({children,buttonType,...otherProps}) {
    
  return (
    <div>
      <button className={`button-container ${buttonTypesClasses[buttonType]}`} {...otherProps}>
        {children}
        </button>
    </div>
  )
}

export default Button
