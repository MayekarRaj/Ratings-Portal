import React, { useState } from 'react'
import * as XLSX from 'xlsx'
import { getAuth } from 'firebase/auth';
import useSWR from 'swr';
import StudentList from './StudentList';

//cancelled

const fetcher = url => fetch(url).then(res => res.json())

export default function upload() {
    const [fileName, setFileName] = useState(null);

    const handleFile = async (e) => {
        const file = e.target.files[0];

        setFileName(file.name);

        const fileData = await file.arrayBuffer();
        const workbook = XLSX.read(fileData);

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        console.log(jsonData)
        console.log(jsonData[0].Email);

        setdata(jsonData)
        

        // fetch('/api/upload', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(jsonData)
        // }).then((res) => {
        //     console.log(res.json())
        // })

    }

    return (
        <div className='h-full w-full flex justify-center content-center '>
            <div className='translate-y-52 h-48 w-80 bg-secondary p-8'>
                <h1 className='text-xl font-semibold justify-center flex m-8'>Upload Doc</h1>
                {fileName && (
                    <p>File Name: <span>{fileName}</span></p>
                )}
                <input className='' type='file' onChange={props.onChange} />
                {/* <button className='translate-y-52 h-48 w-64 bg-secondary p-8' type='submit' onClick={(e) => handleFile(e)}> */}
                {/* <h1>Add Student File</h1> */}
            {/* </button> */}
                {/* <span>{ authState }</span> */}
            </div>
        </div>
    )
}