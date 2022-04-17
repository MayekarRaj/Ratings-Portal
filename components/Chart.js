import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { doc, getDoc } from "firebase/firestore"
import {  firestoredb } from '../firebase'

ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = ({teacherId}) => {
    console.log(teacherId)
    const teacherDocRef = doc(firestoredb, 'teachers', teacherId)
    const [teacherRatings, setTeacherRatings] = useState([])
    useEffect( () => {
        async function fetchDoc() {
            const teacher = await getDoc(teacherDocRef)
            console.log(teacher.data())
            const arrayTeacherRating = []
            for(const i in teacher.data().ratings) {
                arrayTeacherRating.push(teacher.data().ratings[i])
            }
            setTeacherRatings(arrayTeacherRating)
        }
        fetchDoc()
    }, [])

    useEffect(() => {
        console.log(teacherRatings)

    }, [teacherRatings])

    return (
        <div>
            <Pie
                data={{
                    labels: ['1 star', '2 star', '3 star', '4 star', '5 star'],
                    datasets: [
                        {
                            label: '# of ratings',
                            data: teacherRatings,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                            ],
                            borderWidth: 1,
                        },
                        // {
                        //   label: 'Quantity',
                        //   data: [47, 52, 67, 58, 9, 50],
                        //   backgroundColor: 'orange',
                        //   borderColor: 'red',
                        // },
                    ],
                }}
                height={500}
                width={700}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                    legend: {
                        labels: {
                            fontSize: 25,
                        },
                    },
                }}
            />
        </div>
    )
}

export default PieChart