import { firestore } from "../../firebase-admin"

export default async (req, res) => {

    

    if (req.method === 'GET') {
        const uid = req.query.uid;
        console.log(uid);

        // let year = ""

        const data = await firestore.collection('admins').doc(uid).get()
        console.log(data)

        // let year = data.data().year
        // console.log(year)

        // data.data().year ? year = data.data().year : year
        
        // console.log(year)
            

        // if (year === undefined)
        //     console.log(year)
        // else
        //     console.log(year)
        
        res.status(200).json(data)

    }
}