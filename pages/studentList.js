import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import StudentDetails from '../components/StudentDetails'

//cancelled

export default function studentList() {
    // const { state } = this.props.location
    // console.log('studentList', state)

    const router = useRouter();
    const query = router.query
    const fileData = query.fileData

    console.log(fileData)

    return (


        <div className='flex w-screen h-screen'>
            <Head>
                <title>Admin Panel</title>
            </Head>
            <div className='w-1/6 h-full shadow-md bg-secondary px-1'>
                <img src='/main_logo.png' className='h-1/5 w-40 mr-8 ml-11 mt-8 mb-8' ></img>
                <div className='h-3/5 flex flex-col content-end gap-4'>
                    <Link href='/upload'><button className='bg-button text-white mx-8 p-2 rounded'>Create Credentials</button></Link>
                    <button className='bg-button text-white mx-8 p-2 rounded'>Log Out</button>
                </div>
            </div>
            <div className='w-5/6 p-8'>
                <div className=' flex justify-end'>
                    <select className="block bg-button text-white ease-in-out flex rounded ">
                        <option>First year</option>
                        <option>Second Year</option>
                        <option>Third Year</option>
                        <option>Fourth Year</option>
                    </select>
                </div>
                <div className='m-8'>

                    <div className="bg-secondary">
                        <div className="pt-4">
                            <StudentDetails>

                            </StudentDetails>
                        </div>

                        <div className="flex justify-end">
                            <button className="bg-button text-white m-8 rounded p-4">Submit for Registration</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
