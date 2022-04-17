import { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import PieChart from "./Chart"

export default function Modal({ onClose, teacherId }) {
    // const [isBrowser, setIsBrowser] = useState(false)

    // useEffect(() => {
    //     setIsBrowser(true)
    // }, [])

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    }

    return (
        <div key={teacherId} className="absolute flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[90%] justify-center items-center">                                 
            <div className="bg-white w-full h-full p-5 pr-7 rounded-2xl z-[100] border-2">                                     
                <div className="flex justify-end text-xl">                                               
                    <a href="#" onClick={handleClose}>
                        X
                    </a>
                </div>
                <div className="p-5 pt-10 content-center">                                              
                    <PieChart teacherId={teacherId}/>
                </div>
            </div>
        </div>
    )

    // const modalContent = show ? (
    //     <div className="absolute flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[90%] justify-center items-center">                                 
    //         <div className="bg-white w-full h-full p-5 pr-7 rounded-2xl z-[100] border-2">                                     
    //             <div className="flex justify-end text-xl">                                               
    //                 <a href="#" onClick={handleClose}>
    //                     X
    //                 </a>
    //             </div>
    //             <div className="p-5 pt-10 content-center">                                              
    //                 <PieChart teacherId={teacherId}/>
    //             </div>
    //         </div>
    //     </div>
    // ) : null

    // if (isBrowser) {
    //     return ReactDOM.createPortal(
    //         modalContent,
    //         document.getElementById('modal-root')
    //     )
    // } else {
    //     return null
    // }
        
    
}