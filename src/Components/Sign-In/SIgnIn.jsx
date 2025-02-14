import React, { useContext, useState } from 'react'
import { signInWithGooglePopUp,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
import "../Sign-In/signIn.scss"
import FormInput from '../Form-input/FormInput'
import Button from '../Button/Button'

function SIgnIn() {


    const defaultFields = {
        email: "",
        password: "",
    }

    const [formField, setFormField] = useState(defaultFields)
    const {  email, password } = formField
    const handleResetField=()=>{
        setFormField(defaultFields)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
            try {
                const {user}=await signInAuthUserWithEmailAndPassword(email,password)
                handleResetField()
            } catch (error) {
               if(error.code==="auth/invalid-credential"){
                alert("invalid password or email")
               }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormField({ ...formField, [name]: value })
    }
    // firebase
    const signInWithGoogle=async()=>{
        await signInWithGooglePopUp()
      }



    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>sign-In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" label={"Email"} required onChange={handleChange} name='email' value={email} />
                <FormInput type="password" label={"Password"} required onChange={handleChange} name='password' value={password} />
               <div className='buttons-container'>
               <Button  type='submit'>Sign in</Button>
               <Button type='button' buttonType='google' onClick={signInWithGoogle} >Google Sign in</Button>
               </div>
            </form>
        </div>
    )
}

export default SIgnIn
