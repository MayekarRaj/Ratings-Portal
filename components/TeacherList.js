import React, {useState} from 'react'
import StudentDetails from './StudentDetails'
import Modal from '../components/Modal';

export default function TeacherList({f, isUpload}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div key={f.id} className="flex bg-white p-8 space-x-40 my-4 w-full justify-around">
                <span className="">{f.id}</span>
                <span className="">{f.name}</span>
                <span className="">{f.subject}</span>
                {!isUpload && <>
                <button onClick={() => setShowModal(true)} >Check Ratings</button>
                {showModal && <Modal teacherId={f.id}
                  show={showModal}
                  onClose={() => setShowModal(false)}
                />}
                 </>}
              </div>
  )
}
