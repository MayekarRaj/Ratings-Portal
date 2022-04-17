import { getAuth } from "firebase-admin/auth";
import adminApp, {firestore} from "../../firebase-admin";
import bcrypt from 'bcrypt'


export default (req, res) => {
    if (req.method === 'POST') {
        // console.log(req.body)
        const data = [] 
        console.log(req.body)
        const dataArray = req.body.data
        const year = req.body.year
        dataArray.forEach(e => {
            data.push({
                uid: e['Roll No'].toString(),
                email: e['Email'],
                displayName: e['Name'],
                passwordHash: Buffer.from(bcrypt.hashSync(e['Password'].toString(), 10))
            })
        });
        console.log(data)
        getAuth(adminApp)
            .importUsers(data, 
                {
                    hash: {
                        algorithm: 'BCRYPT',
                    },
                }
            )
            .then((results) => {
                data.forEach(async (e, i) => {
                    if(!results.errors.some((es) => es.index == i)){
                        await firestore.collection('students').doc(e.uid).set({
                            name: e.displayName,
                            email: e.email,
                            year: year,
                            ratedTeachersList: []
                        })
                    }
                })
                results.errors.forEach((indexedError) => {
                    console.log(`Error importing user ${indexedError.error}`);
                });
            })
            .catch((error) => {
                console.log('Error importing users :', error);
            });

    }
    res.status(200).json({ name: 'test' })
}