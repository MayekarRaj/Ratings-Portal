export default function StudentDetails({ fileData }) {

    console.log(fileData)
    return (
        
        <div>
            {fileData.map(f => (
                <div className="flex bg-white p-8 space-x-40 my-4 w-full justify-around">
                    <span className="">{f['Roll No']}</span>
                    <span>{f.Name}</span>
                    <span>{f.Email}</span>
                    <span>{f.Password}</span>
                    {/* <span>ratings</span> */}
                </div>
            ))}
 
        </div>

    )
}
