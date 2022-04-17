import { getAuth } from "firebase-admin/auth";
import adminApp, { firestore } from "../../firebase-admin";
import bcrypt from 'bcrypt'


export default (req, res) => {
    if (req.method === 'POST') {
        // console.log(req.body)
        // const data = []
        console.log(req.body)
        const dataArray = req.body.data
        const year = req.body.year

        dataArray.forEach(async (e) => {
                
                await firestore.collection('teachers').doc(e.id).set({
                    name: e.name,
                    subject: e.subject,
                    photoUrl: e.photoUrl,
                    year: year,
                    ratings: {
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0,
                        5: 0
                    }
                })
            })
    }
    res.status(200).json({ name: 'test' })


}