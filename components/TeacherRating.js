import StarRatings from "./StarRatings";
import { useState, useEffect } from 'react'
import {  firestoredb } from '../firebase'
// import { getDatabase, ref, child, get } from "firebase/database";
import { doc, onSnapshot} from "firebase/firestore"

export default function TeacherRating() {
    
    const [teachersData, setTeachersData] = useState(false)
    const [teachersList, setTeachersList] = useState([])
    
    const onSubmit = (teacherId) => {
        setTeachersList([...teachersList, teacherId])
        window.localStorage.setItem('teachersList', JSON.stringify(teachersList))

    }

    useEffect( () => {
        const docRef = doc(firestoredb, 'students', window.localStorage.getItem('uid'))
        // console.log(teachersList)
        onSnapshot(docRef, d => {
            // console.log(d.data().ratedTeachersList)
            
            setTeachersList(d.data().ratedTeachersList)
            // console.log(d.data().ratedTeachersList)
        })
        
        // setTeachersList(JSON.parse(window.localStorage.getItem('teachersList')))
    }, [])

    useEffect(() => {
        if (window.localStorage.getItem('year')) {
            fetch(`/api/teacherlist?year=${window.localStorage.getItem('year')}`)
                .then((res) => res.json()).then((data) => setTeachersData(data)
                )
        }
        // console.log(JSON.parse(window.localStorage.getItem('teachersList')))
    }, [])

    useEffect(() => {
        // console.log(teachersList)
        if (teachersData && teachersList) {

            setTeachersData(teachersData.filter(t => !teachersList.includes(t.id)))
            // console.log(teachersData)
        }
    }, [teachersList, teachersData])

    return (
        <div className="flex flex-col h-[38rem] overflow-y-auto">

            {teachersData && teachersData.map((t) => <div key={t.id} className="flex w-auto ml-16 p-4">
                <div className="w-1/4 p-8">
                    <img src={'/' + t.photoUrl}></img>
                </div>
                <div className="w-3/4 p-8 m-4">
                    <div className="h-1/3 pl-20 ">
                        <p className="text-4xl ">{t.name}</p>
                    </div>
                    <div className="h-1/3 pr-20 -translate-x-14">
                        <p className="text-sm text-center">{t.subject}</p>
                    </div>
                    <StarRatings teachersList={teachersList} teacherId={t.id} />
                    {/* <div className="flex h-1/3 pl-32">
                        <div className="flex justify-between items-center gap-x-8">
                            <div>
                                {[...Array(5)].map((star, index) => {
                                    index += 1;
                                    return (
                                        <button
                                            type="button"
                                            key={`${t.id}-${star}`}
                                            className={index <= (hover || rating) ? "on" : "off"}
                                            onClick={() => setRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(rating)}
                                        >
                                            <span className="star inline-block text-4xl w-8">&#9733;</span>
                                        </button>
                                    );
                                })}
                            </div>
                            <button onClick={() => onSubmit()} >Submit</button>
                        </div>
                    </div> */}

                </div>
            </div>)}


        </div>

    )
}
