import { useEffect, useState } from "react";
import "./EmployeeList.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function EmployeeList() {
    const navigate=useNavigate();
    const[employeeList, setEmployeeList]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/employeeList")
        .then((response)=>{
            setEmployeeList(response.data);
            console.log(response.data);
            
        })
    },[]);
    function addEmployee(){
        navigate("/add")
    }
    function jsondata(){
        axios.get("http://localhost:3001/employeeList")
        .then((response)=>{
            setEmployeeList(response.data);
            console.log(response.data);
            
        })
    }
    function handleDelete(id){
        axios.delete(`http://localhost:3001/employeeList/${id}`)
        .then((response)=>{
            console.log(response.data);
            alert("Delete")
            jsondata();
        })
    }
    function handleEdit(id){
        navigate(`/edit/${id}`);
    }
    return (
        <div className="outerSection">
    <div className="headerSection">
        <div className="header">Employee Data</div>
        <div>
            <button className="addButton" onClick={addEmployee}>Add Employee <i class="fa fa-sign-in" aria-hidden="true"></i> </button>
        </div>
    </div>

    <div className="allinfo">
        <table border={1} className="tabledata">
            <thead className="tableHead">
                <tr className="tableheader">
                    <th className="tableCell1">Sr.No</th>
                    <th className="tableCell2">Employee ID</th>
                    <th className="tableCell3">Name</th>
                    <th className="tableCell4">Email</th>
                    <th className="tableCell5">Date Of Birth</th>
                    <th className="tableCell6">Gender</th>
                    <th className="tableCell7">Address</th>
                    <th className="tableCell8">Phone Number</th>
                    <th className="tableCell9">Action</th>
                </tr>
            </thead>
            <tbody className="tableBody">
                {employeeList?.map((singleEmployee, index) => (
                    <tr className="tableRow">
                        <td className="tableCell1">{index + 1}</td>
                        <td className="tableCell2">{singleEmployee.ID}</td>
                        <td className="tableCell3">{singleEmployee.Name}</td>
                        <td className="tableCell4">{singleEmployee.Email}</td>
                        <td className="tableCell5">{singleEmployee.Dob}</td>
                        <td className="tableCell6">{singleEmployee.Gender}</td>
                        <td className="tableCell7">{singleEmployee.Address}</td>
                        <td className="tableCell8">{singleEmployee.PhNumber}</td>
                        <td className="tableCell9">
                            <button className="actionButton" onClick={() => handleEdit(singleEmployee.id)}>Edit</button>
                            <button className="actionButton" onClick={() => handleDelete(singleEmployee.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

    );
}