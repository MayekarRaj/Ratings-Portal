export default (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body)
        const teacherId = req.body.teacherId
        const teacherRating = req.body.rating

        

        res.status(200).json({
            status: "Successfull"
        })
    }
}