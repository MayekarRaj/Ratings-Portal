import React, { useState } from "react";
import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { getAuth, signInWithEmailAndPassword, getIdToken } from 'firebase/auth'
import app from "../firebase";

export default function login() {

    let token = ''

    const [authState, setauthState] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter()

    const onSubmit = e => {
        
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(async (u) => {

                console.log('User logged in')
                await fetch(`/api/userDetails?uid=${u.user.uid}`).then(res => res.json()).then(data => {
                    window.localStorage.setItem('year', data.year)                    
                    window.localStorage.setItem('uid', u.user.uid)                    
                    window.localStorage.setItem('teachersList', JSON.stringify(data.teachersList))                    
                })
                router.push('/teacherRatings')
                })
                // Signed in 
                // const user = userCredential.user;
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
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
                        <h1 className="text-xl">Student Login</h1>
                        <form onSubmit={onSubmit}>
                            <div className="form-group my-8">
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control block w-full ease-in-out transition rounded"></input>
                                <label className="form-label inline-block text-sm text-gray-700">Email Address</label>
                                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className="mt-8 form-control block w-full ease-in-out transition rounded"></input>
                                <label className="form-label block text-sm text-gray-700">Password</label>
                                <button type="submit" className="mt-8 px-8 py-2.5 rounded bg-slate-900 text-white ">Login</button>
                            </div>
                        </form>
                        {/* <button className="block my-2 text-xs text-gray-500">Admin Login</button> */}
                        <Link href='/adminLogin'><button className='flex block my-2 text-xs text-gray-500'>Admin Login</button></Link>
                        <button className="text-slate-900">Don't have an account? Contact Admin</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
