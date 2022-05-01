import React, { useState } from "react";
import Head from 'next/head'
import { getAuth, signInWithEmailAndPassword, getIdToken, setPersistence, browserSessionPersistence } from 'firebase/auth'

// import { firestore } from "/firebase-admin"
import { useRouter } from 'next/router'
import app, { firestoredb } from "../firebase";
// import { doc, onSnapshot } from "firebase/firestore"


export default function login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()


    const onSubmit = async (e) => {

        const auth = getAuth();
        // setPersistence(auth, browserSessionPersistence)
        // auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        signInWithEmailAndPassword(auth, email, password)
            // if (email === )
            .then(async (u) => {

                // const data = await firestoredb.collection('students').doc(uid).get()
                // console.log(data)
                // console.log('User logged in')
                await fetch(`/api/adminlogin?uid=${u.user.uid}`).then(res => res.json()).then(data => {

                    // console.log(data)
                    
                    if (data)
                        router.push('/')
                    // else
                    //     alert('not an admin')

                    // if (typeof data == undefined )
                    //     console.log('user is admin')

                    // // console.log(data.year)
                    // // router.push('/')
                    // else
                    //     console.log(data)
                    //     alert('Id entered is a student')

                })

            })
            // Signed in 
            // const user = userCredential.user;
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                alert('User not found')
            })
        // .finally(

        //     // await fetch(`/api/adminlogin?uid=${u.user.uid}`).then(res => res.json()).then(data => {data = undefined})
        //     data = undefined
        // )
        e.preventDefault();
    }


    return (
        <div className='flex h-screen w-screen bg-login justify-center content-center '>
            <Head>
                <title>Login</title>
            </Head>
            <div className="flex w-[54rem] h-[42rem] p-6 rounded-lg shadow-lg bg-white m-8">
                <div className='flex w-2/5 h-full mr-8 ml-2 mb-8  '>
                    <img src='/stock_login.jpg' className='rounded-l-lg '></img>
                </div>
                <div className='flex flow-root w-3/5'>
                    <img src='/main_logo.png' className=' w-32 h-32 mr-8 ml-11 mt-8 mb-8 '></img>
                    <div className="font-sans m-8">
                        <h1 className="text-xl">Admin Login</h1>
                        <form onSubmit={onSubmit}>
                            <div className="form-group my-8">
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control block w-full ease-in-out transition rounded"></input>
                                <label className="form-label inline-block text-sm text-gray-700">Email Address</label>
                                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className="mt-8 form-control block w-full ease-in-out transition rounded"></input>
                                <label className="form-label block text-sm text-gray-700">Password</label>
                                <button type="submit" className="mt-8 px-8 py-2.5 rounded bg-slate-900 text-white ">Login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
