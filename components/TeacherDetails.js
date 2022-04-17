import TeacherList from '../components/TeacherList';

export default function TeacherDetails({ teachersData, isUpload=false }) {
    console.log(teachersData)
//   teachersData.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
//   });
    return (
        <div>
            {teachersData.map(f => (

              <TeacherList isUpload={isUpload} f={f} />
            ))}
        </div>
    )
}
