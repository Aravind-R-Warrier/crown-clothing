import React, {  useContext, useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import '../sign-Up/signUp.scss'
import FormInput from '../Form-input/FormInput'
import Button from '../Button/Button'

function SIgnUp() {


    const defaultFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [formField, setFormField] = useState(defaultFields)
    const { displayName, email, password, confirmPassword } = formField
    const handleResetField=()=>{
        setFormField(defaultFields)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("password does not match")
            return
        }
            try {
                const  {user } = await createAuthUserWithEmailAndPassword(email, password)
                await createUserDocumentFromAuth(user, { displayName })
                handleResetField()
                alert("user created")
            } catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    alert('email already in use')
                } else {
                    console.log(error,'user creation encoutered an error')
                }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormField({ ...formField, [name]: value })
    }



    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>sign-up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" label={"Display Name"} required onChange={handleChange} name='displayName' value={displayName} />
                <FormInput type="email" label={"Email"} required onChange={handleChange} name='email' value={email} />
                <FormInput type="password" label={"Password"} required onChange={handleChange} name='password' value={password} />
                <FormInput type="password" label={"Confirm Password"} required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <Button  type='submit'>Sign-Up</Button>
            </form>
        </div>
    )
}

export default SIgnUp
