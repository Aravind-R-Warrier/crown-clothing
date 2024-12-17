import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import { FirebaseError } from 'firebase/app'
import FormInput from '../Form-input/FormInput'

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
        <div>
            <h1>sign-up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" label={"Display Name"} required onChange={handleChange} name='displayName' value={displayName} />
                <FormInput type="email" label={"Email"} required onChange={handleChange} name='email' value={email} />
                <FormInput type="password" label={"Password"} required onChange={handleChange} name='password' value={password} />
                <FormInput type="password" label={"Confirm Password"} required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <button type='submit'>Sign-Up</button>
            </form>
        </div>
    )
}

export default SIgnUp
