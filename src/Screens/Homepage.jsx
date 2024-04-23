import React, { useState } from 'react'
import './Homepage.css'
import { app,firestore } from '../components/Firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc,getDoc } from 'firebase/firestore';


const Homepage = () => {


    const [yourName, setyourName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})



    const auth = getAuth();


    async function signUp() {
        
        await createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(firestore, 'users', user.uid), {
            name: yourName,
            email: email,
          });
        alert('New User has been Added!')

    }

    async function login() {

        const result = await signInWithEmailAndPassword(auth, email, password)
        window.confirm('User wants to login?')

        console.log(result)

        setUser({
            email: result.user.email,
            uid: result.user.uid,
          });


          const user = result.user;
      const userDoc = await getDoc(doc(firestore, 'users', user.uid));
      
      if (userDoc.exists()) {
        setyourName(userDoc.data().name)
      }

    }




  return (
    
    <div id='homepage'>

        <div id="card">

        <div id="name">
                <p>Name:</p>
                <input type="text" name="" id="" onChange={(e)=> {setyourName(e.target.value)}} />
            </div>

            <div id="email">
                <p>Email:</p>
                <input type="text" name="" id="" onChange={(e)=> {setEmail(e.target.value)}} />
            </div>

            <div id="password">
                <p>Password:</p>
                <input type="password" name="" id="" onChange={(e)=> {setPassword(e.target.value)}} />
            </div>

            <div id="button-container">
                <div id="signup">
                    <button onClick={signUp}>Sign Up</button>
                </div>

                <div id="login">
                    <button onClick={login}>Log In</button>

                </div>

                <div id="signupGoogle">
                    <button>Sign Up with Google</button>
                </div>
            </div>

        </div>


        <div id="results">
            {/* <p>Name: {yourName}</p> */}
            <p>Email: {user.email}</p>
            <p>Id: {user.id}</p>
        </div>


    </div>
  )
}

export default Homepage
