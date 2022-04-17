import { getAuth } from "firebase-admin/auth";
import adminApp from "../../firebase-admin";

//cancelled

export default (req, res) => {

    const studentList = []

    getAuth(adminApp)
        .listUsers(1000)    
        .then((listUsersResult) => {
            listUsersResult.users.forEach((userRecord) => {
                console.log('user', userRecord.toJSON());
            });
            if (listUsersResult.pageToken) {
                // List next batch of users.
                listAllUsers(listUsersResult.pageToken);
            }
        })
        .catch((error) => {
            console.log('Error listing users:', error);
        });
    res.send(studentList)
}
