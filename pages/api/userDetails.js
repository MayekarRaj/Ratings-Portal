import {firestore} from "../../firebase-admin"

export default  async (req, res) =>  {
    if (req.method === 'GET') {
        const uid = req.query.uid;
        console.log(uid);

        const data = await firestore.collection('students').doc(uid).get()
        console.log(data)
        res.status(200).json({year: data.data().year, teachersList: data.data().ratedTeachersList})
    }
}