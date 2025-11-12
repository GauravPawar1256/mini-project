import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddEmployee() {
    const navigate = useNavigate();
    const [employee ,setEmployee]=useState({
        name:"",
        ID:"",
        address:"",
        contactNumber:"",
        email:""

    });
    const {id}=useParams();
    function handleEmployeeName(event){
        let employeeinfo ={...employee}
        employeeinfo["name"]=event.target.value;
        setEmployee(employeeinfo);
    }
    function handleEmployeeID(event){
        let employeeinfo ={...employee}
        employeeinfo["ID"]=event.target.value;
        setEmployee(employeeinfo);
    }
    function handleEmployeeAddress(event){
        let employeeinfo ={...employee}
        employeeinfo["address"]=event.target.value;
        setEmployee(employeeinfo);
    }
    function handleEmployeeContactNo(event){
        let employeeinfo ={...employee}
        employeeinfo["contactNumber"]=event.target.value;
        setEmployee(employeeinfo);
    }
    function handleEmail(event){
        let employeeinfo ={...employee}
        employeeinfo["email"]=event.target.value;
        setEmployee(employeeinfo);
    }

    function handleAllEmployeeList() {
        navigate("/employeelist");
    }
    function handleAllProjects() {
        navigate("/")
    }
    useEffect(()=>{
        if(id){
            axios.get(`http://localhost:4200/employeeList/${id}`)
            .then((Response)=>{
                setEmployee(Response.data);
            })
        }

    },[])
    function handleSaveButton(){
        if(!employee.name){
            alert("Enter Details");
            return;

        }
        if(id){
            axios.put(`http://localhost:4200/employeeList/${id}`,employee)
            .then((Response)=>{
                console.log(Response.data);
                navigate("/")
            })
        }
        else{
        axios.post("http://localhost:4200/employeeList",employee)
        .then((Response)=>{
            console.log(Response.data);
            navigate("/")
            
        })}
        
    }
    return (
        <div className="m-0 bg-slate-200 min-h-screen">
            <div className="bg-gray-800 text-white flex justify-between px-8 py-4 items-center">
                <div className="text-2xl font-bold">Add Employee</div>
                <div>
                    <button className="bg-white text-black font-semibold px-3 py-1 rounded-md mx-2 hover:bg-gray-200 transition" onClick={handleAllProjects}>
                        All Project
                    </button>
                    <button className="bg-white text-black font-semibold px-3 py-1 rounded-md mx-2 hover:bg-gray-200 transition" onClick={handleAllEmployeeList}>
                        All Employee
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center py-10">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Employee Name</label>
                            <input type="text" value={employee.name} onChange={handleEmployeeName} placeholder="Enter employee name" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Employee ID</label>
                            <input type="text" value={employee.ID} onChange={handleEmployeeID}  placeholder="Enter employee ID" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Employee Address</label>
                            <input type="text" value={employee.address} onChange={handleEmployeeAddress}  placeholder="Enter address" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Contact Number</label>
                            <input type="tel" value={employee.contactNumber} onChange={handleEmployeeContactNo}  placeholder="Enter contact number" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Email ID</label>
                            <input type="email" value={employee.email} onChange={handleEmail}  placeholder="Enter email ID" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <button className="w-full bg-gray-800 text-white font-semibold py-2 rounded-md mt-5 hover:bg-green-700 transition" onClick={handleSaveButton}>Add Employee</button>
                  
                </div>
            </div>
        </div>
    );
}
