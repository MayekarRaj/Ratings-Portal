import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import * as XLSX from 'xlsx'
import StudentDetails from '../components/StudentDetails';

const fetcher = url => fetch(url).then(res => res.json())

export default function upload() {
    const [fileName, setFileName] = useState(null);
    const [fileuploaded, setfileuploaded] = useState(false)
    const [filedata, setFileData] = useState();
    const [year, setYear] = useState();
    const [yearString, setYearString] = useState(false);
    let jsonData = [];

    const handleFile = async (e) => {
        const file = e.target.files[0];

        setFileName(file.name);

        const fileData = await file.arrayBuffer();
        const workbook = XLSX.read(fileData);

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        jsonData = XLSX.utils.sheet_to_json(worksheet);

        console.log(JSON.stringify(jsonData))
        // console.log(jsonData[0].Email);
        setFileData(jsonData)
        console.log(filedata)

    }

    const sendFileData = () => {

        console.log(filedata)

        if(!year) {
            setYearString(true)
            return
        } else {
            setYearString(false)            
        }
        const body = {
            data: filedata,
            year: year
        }
        fetch('/api/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((res) => {
            console.log(res.json())
        })
    }

    return (
        <div className='flex w-screen h-screen'>
            <Head>
                <title>Admin | Upload Student Doc</title>
            </Head>
            <div className='w-1/6 h-full shadow-md bg-secondary px-1'>
                <img src='/main_logo.png' className='h-1/5 w-40 mr-8 ml-11 mt-8 mb-8' ></img>
                <div className='h-3/5 flex flex-col content-end gap-4'>
                    <Link href='/upload' ><button className='bg-button text-white mx-8 p-2 rounded'>Create Credentials</button></Link>
                    <button  className='bg-button text-white mx-8 p-2 rounded'>Log Out</button>
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

                    {!fileuploaded &&
                        <div className='h-full w-full flex justify-center content-center '>
                            <div className='translate-y-32 h-72 w-96 bg-secondary p-8 space-y-12 align-middle'>
                                <h1 className='text-2xl font-semibold justify-center flex m-8'>Upload Student Doc</h1>

                                <input className='' type='file' onChange={(e) => { handleFile(e) }} />
                                {fileName && (
                                    <p>
                                        File Name: <span>{fileName}</span>
                                    </p>
                                )}
                                {/* <button className='translate-y-52 h-48 w-64 bg-secondary p-8' type='submit' onClick={(e) => handleFile(e)}> */}
                                {/* <h1>Add Student File</h1> */}
                                {/* </button> */}
                                {/* <span>{ authState }</span> */}
                            </div>
                            <div className='justify-end'>
                                <button onClick={() => setfileuploaded(true)} className='block bg-button text-white rounded px-4 py-2 '>Next</button>
                            </div>
                        </div>
                    }

                    {fileuploaded &&
                        <div className="bg-secondary px-4">
                            <div className="pt-4">
                                <StudentDetails fileData={filedata}/>
                            </div>

                            <div className="flex justify-end">
                                <button onClick={sendFileData} className="bg-button text-white m-8 rounded p-4">Submit for Registration</button>
                                {yearString && <span>SELECT YEAR!!</span>}
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
