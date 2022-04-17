import React, { useState, useEffect } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import {  firestoredb } from '../firebase'

export default function StarRatings({teacherId, teachersList}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  // useEffect(() => console.log(rating), [rating])

  const onSubmit = async () => {
    console.log(rating)
    console.log(teachersList)
    const docRef = doc(firestoredb, 'students', window.localStorage.getItem('uid'))
    await updateDoc(docRef, {
      ratedTeachersList: [...teachersList, teacherId]
    })
    const teacherDocRef = doc(firestoredb, 'teachers', teacherId)
    const teacher = await getDoc(teacherDocRef)
    await updateDoc(teacherDocRef, {
      ratings: {
        ...teacher.data().ratings,
        [rating]: teacher.data().ratings[rating]+1
      }
    })
    // handleSetTeachersList([(t) => [...t, teacherId]])
    // const teachersListCopy = [...JSON.parse(window.localStorage.getItem('teachersList')), teacherId]
    // window.localStorage.setItem('teachersList', JSON.stringify(teachersListCopy))
  }

  return (
    <div className="flex justify-between w-max items-center gap-x-8">
      <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (          
          <button
            type="button"
            key={index}
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
      <button onClick={() =>onSubmit()} >Submit</button>
      </div>
  );
};