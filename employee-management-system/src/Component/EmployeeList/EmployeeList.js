import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EmployeeList() {
    const navigate = useNavigate();
    const [employeeListData, setemployeeListData] = useState([]);
    const[searchEmployee,setSearchEmployee]=useState("");
    const [selectedEmployees, setSelectedEmployees] = useState([]);

   function handleEmployeeSearch(event){
        setSearchEmployee(event.target.value);
    }
    const filteredEmployeeData = employeeListData.filter((emp) =>
        emp.name.toLowerCase().includes(searchEmployee.toLowerCase())
    );
    
    function handleAddEmployee() {
        navigate("/addemployee");
    }
    function handleAllProjects() {
        navigate("/")
    }
    function getJsonData() {
        axios.get("http://localhost:4200/employeeList")
            .then((response) => {
                setemployeeListData(response.data);
            })
    }
    useEffect(() => {
        axios.get("http://localhost:4200/employeeList")
            .then((response) => {
                setemployeeListData(response.data);
            })

    }, [])
    function handleDelete(id) {
        axios.delete(`http://localhost:4200/employeeList/${id}`)
            .then((response) => {
                alert("delete");
                getJsonData();
            })
    }
    function handleEdit(id) {
        navigate(`/edit/${id}`);
    }

    return (
        <div className="m-0 bg-slate-200 min-h-screen ">
            <div className="bg-gray-800 text-white flex justify-between px-8 py-4 items-center ">
                <div className="text-2xl font-bold">Employees</div>
                <div>
                    <input placeholder="Search Employee" className="rounded-md p-1 border-l-0 rounded-r-none text-gray-800" value={searchEmployee} onChange={handleEmployeeSearch} />
                    <button className="bg-white text-black font-semibold p-1 rounded-md border-l-0 rounded-l-none"> <i class="fa fa-search" aria-hidden="true"></i> Search</button>
                    <button className="bg-white text-black font-semibold p-1 rounded-md mx-2" onClick={handleAddEmployee}>Add Employee <i class="fa fa-sign-in" aria-hidden="true"></i> </button>
                    <button className="bg-white text-black font-semibold px-3 py-1 rounded-md mx-2 hover:bg-gray-200 transition" onClick={handleAllProjects}> All Project</button>
                </div>
            </div>
            <div>
                <table className="table-fixed w-[98%] border-collapse m-2">
                    <tr className="text-1xl text-center font-serif bg-gray-800 text-white border-black">
                        <th className="border border-white p-2 w-[70px]">Sr.No</th>
                        <th className="border border-white p-2 w-[200px]">Employee Name</th>
                        <th className="border border-white p-2 w-[120px]">Employee ID</th>
                        <th className="border border-white p-2 w-[250px]">Employee Address</th>
                        <th className="border border-white p-2 w-[120px]">Phone Number</th>
                        <th className="border border-white p-2 w-[200px]">Project Name</th>
                        <th className="border border-white p-2 w-[250px]">Email ID</th>
                        <th className="border border-white p-2 w-[162px]">Actions</th>
                    </tr>
                    {filteredEmployeeData?.map((singleEmployee, index) => (<tr className="p-4 text-center">
                        <td className="border border-black p-2 break-words">{index + 1}</td>
                        <td className="border border-black p-2 break-words">{singleEmployee.name}</td>
                        <td className="border border-black p-2 break-words">{singleEmployee.ID}</td>
                        <td className="border border-black p-2 break-words">{singleEmployee.address}</td>
                        <td className="border border-black p-2 break-words">{singleEmployee.contactNumber}</td>
                        <td className="border border-black p-2 break-words">{singleEmployee.projectName}</td>
                        <td className="border border-black p-2 break-words">{singleEmployee.email}</td>
                        <td className="border border-black p-2">
                            <button className="bg-green-600 p-1  text-m font-medium rounded-md font-mono  hover:bg-green-800 text-white mx-[5px]" onClick={() => handleEdit(singleEmployee.id)}> <i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
                            <button className="bg-red-500 p-1  text-m font-medium rounded-md font-mono  hover:bg-red-800 text-white" onClick={() => handleDelete(singleEmployee.id)}> <i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
                        </td>
                        
                    </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}