import {firestore} from "../../firebase-admin"

export default  async (req, res) =>  {
    if (req.method === 'GET') {
        const year = req.query.year;
        console.log(year);
        
        const data = await firestore.collection('teachers').where('year', '==', year).get()
        // console.log(data)
        const structuredData = []
        data.forEach(doc => {
            // console.log(doc.id, '=>', doc.data());
            structuredData.push({
                id: doc.id,
                // name: doc.data().name,
                // subject: doc.data().subject
                ...doc.data()
            })
          });
        res.status(200).json(structuredData)
    }
}