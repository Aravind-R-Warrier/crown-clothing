// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Authorisation
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
// Db firebase-firestore
import { getFirestore,getDoc,setDoc,doc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyctpw4MrfDmjHlxvQpi4vKta8oJRSOTU",
  authDomain: "crown-clothing-79fc0.firebaseapp.com",
  projectId: "crown-clothing-79fc0",
  storageBucket: "crown-clothing-79fc0.firebasestorage.app",
  messagingSenderId: "443407543842",
  appId: "1:443407543842:web:5ce12258e353b049fa647b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// initialise Auth
const provider=new GoogleAuthProvider()

provider.setCustomParameters({
    prompt:"select_account"
})
export const auth=getAuth()
export const signInWithGooglePopUp=()=>signInWithPopup(auth,provider)

// initialise db
export const db=getFirestore()

export const createUserDocumentFromAuth=async (userAuth,additionalInfo={})=>{
const userDocRef=doc(db,'users',userAuth.uid)
// console.log(userDocRef)
const userSnapShot=await getDoc(userDocRef)
// console.log(userSnapShot)
// console.log(userSnapShot.exists())

// check wheather user instance exists or not
if(!userSnapShot.exists()){
  const {displayName,email}=userAuth;
  const createdAt=new Date()
  try{
    await setDoc(userDocRef,{
      displayName,
      email,
      createdAt,
      ...additionalInfo
    })
  }catch(err){
    console.log(err,'something wrong in function of usercreation')
  }
}
return userDocRef
}
// create user with email/password method
export const createAuthUserWithEmailAndPassword=async (email,password)=>{
if(!email || !password)return
return await createUserWithEmailAndPassword(auth,email,password)
}

// signin with emailAndPassword
export const signInAuthUserWithEmailAndPassword=async (email,password)=>{
if(!email || !password)return
return await signInWithEmailAndPassword(auth,email,password)
}