import StudentDetails from "./StudentDetails";

//cancelled

export default function StudentList() {

    // fetch('/api/studentlist').then((res) => { console.log(res) })

    const handleFile = async (e) => {
        const file = e.target.files[0];

        setFileName(file.name);

        const fileData = await file.arrayBuffer();
        const workbook = XLSX.read(fileData);

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        console.log(jsonData)
        console.log(jsonData[0].Email);

        setdata(jsonData)
    }

    return (
        <div className="bg-secondary">
            <div className="pt-4">
                
            </div>

            <div className="flex justify-end">
                <button className="bg-button text-white m-8 rounded p-4">Submit for Registration</button>
            </div>
        </div>

    )
}
