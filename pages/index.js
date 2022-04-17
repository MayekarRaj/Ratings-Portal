import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getDatabase, ref, child, get } from "firebase/database";
import { collection, addDoc, getDoc, setDoc, doc } from "firebase/firestore";
import app, { firestoredb } from '../firebase'
import firebase from 'firebase/app'


import StudentList from '../components/StudentList'
import TeacherList from '../components/TeacherList'
import TeacherRating from '../components/TeacherRating'
import RatingChart from '../components/RatingChart'
import Upload from '../components/Upload'
import StudentDetails from '../components/StudentDetails'
import { async } from '@firebase/util';
import Modal from '../components/Modal';
import TeacherDetails from '../components/TeacherDetails';

export default function Home() {
  const [year, setYear] = useState();
  const [teachersData, setTeachersData] = useState(false)

  useEffect(() => {
    if(year) fetch(`/api/teacherlist?year=${year}`).then((res) => res.json()).then((data) => setTeachersData(data))
  }, [year])

  return (
    <div className='flex w-screen h-screen'>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <div className='w-1/6 h-full shadow-md bg-secondary px-1'>
        <img src='/main_logo.png' className='h-1/5 w-40 mr-8 ml-11 mt-8 mb-8' ></img>
        <div className='h-3/5 flex flex-col content-end gap-4'>
          <Link href='/upload'><button className='bg-button text-white mx-8 p-2 rounded'>Create Credentials</button></Link>
          <Link href='/teacherUpload'><button className='bg-button text-white mx-8 p-2 rounded'>Add Teachers</button></Link>
          <button className='bg-button text-white mx-8 p-2 rounded'>Log Out</button>
        </div>
      </div>
      <div className='w-5/6 p-8'>
        <div className=' flex justify-end'>
        <select defaultValue="default" onChange={(e) => setYear(e.target.value) } 
                    className=" bg-button text-white ease-in-out flex rounded ">
                        <option value='default' selected     >Select Year</option>
                        <option value='first-year' >First year</option>
                        <option value='second-year' >Second Year</option>
                        <option value='third-year' >Third Year</option>
                        <option value='fourth-year' >Fourth Year</option>
                    </select>
        </div>
        <div className='m-8'>
    
          <div className="bg-secondary">
            <div className="p-4">
    
              {teachersData && <TeacherDetails teachersData={teachersData} />}
              
              {/* <div className="flex bg-white p-8 space-x-40 my-4 w-full justify-around">
                <span className="">Teacher Name</span>
                <button onClick={() => setShowModal(true)} >ratings</button>
                <Modal
                  show={showModal}
                  onClose={() => setShowModal(false)}
                >
                  Modal example
                </Modal>
              </div> */}
            </div>

            {/* <div className="flex justify-end">
                            <button className="bg-button text-white m-8 rounded p-4">Submit for Registration</button>
                        </div> */}
          </div>

        </div>
      </div>
    </div>
  )
}
