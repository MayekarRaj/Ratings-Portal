import React, {useState} from 'react'
import Head from 'next/head'
import TeacherRating from '../components/TeacherRating'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useRouter} from 'next/router'
import app from "../firebase"

export default  function teacherRatings() {

    const [user, setUser] = useState(false);
    const router = useRouter()

    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (!user) {
            () => router.push("/studentLogin")
            
      } else {
          setUser(auth.currentUser)
        //   console.log("Display name -> " + auth.currentUser.displayName)
        console.log(window.localStorage.getItem("year"))
      }
    });

    // const teachers = await fetch(`/api/teacherlist?year=${year}`).then((res) => res.json()).then((data) => setTeachersData(data))

    return (
        <div className='flex w-screen h-screen'>
            <Head>
                <title>Teacher Ratings</title>
            </Head>
            <div className='w-1/6 h-full shadow-md bg-secondary px-1'>
                <img src='/main_logo.png' className='h-1/5 w-40 mr-8 ml-11 mt-8 mb-8' ></img>
                <div className='h-3/5 flex flex-col content-end gap-4'>
                    {/* <Link href='/upload'><button className='bg-button text-white mx-8 p-2 rounded'>Create Credentials</button></Link> */}
                    <button onClick={() => {
                        auth.signOut()
                        router.push("/studentLogin")
                        }} className='bg-button text-white mx-8 p-2 rounded'>Log Out</button>
                </div>
            </div>
            <div className='w-5/6  p-8'>
                <div className=' flex justify-end'>
                    {/* <select className="block bg-button text-white ease-in-out flex rounded ">
                        <option>First year</option>
                        <option>Second Year</option>
                        <option>Third Year</option>
                        <option>Fourth Year</option>
                    </select> */}
                    <p className='text-2xl font-medium'>
                        <span>Welcome, {user ? user.displayName : "student"}</span>
                    </p>
                </div>
                <div className='m-8'>

                    <TeacherRating>

                    </TeacherRating>

                </div>
            </div>
        </div>
    )
}
