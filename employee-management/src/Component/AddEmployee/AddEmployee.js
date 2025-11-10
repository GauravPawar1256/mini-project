import { useEffect, useState } from "react";
import "./AddEmployee.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function AddEmployee() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        id: "",
        ID: "",
        Name: "",
        Email: "",
        Dob: "",
        Gender: "",
        Address: "",
        PhNumber: ""
    });


    function handleEmployeeId(event) {
        let employeeinfo = { ...employee }
        employeeinfo["ID"] = event.target.value;
        setEmployee(employeeinfo);
    }
    function handleName(event) {
        let employeeinfo = { ...employee }
        employeeinfo["Name"] = event.target.value;
        setEmployee(employeeinfo);
    }
    function handleEmail(event) {
        let employeeinfo = { ...employee }
        employeeinfo["Email"] = event.target.value;
        setEmployee(employeeinfo);
    }
    function handleDob(event) {
        let employeeinfo = { ...employee }
        employeeinfo["Dob"] = event.target.value;
        setEmployee(employeeinfo);
    }
    function handleGender(event) {
        let employeeinfo = { ...employee }
        employeeinfo["Gender"] = event.target.value;
        setEmployee(employeeinfo);
    }
    function handleAddress(event) {
        let employeeinfo = { ...employee }
        employeeinfo["Address"] = event.target.value;
        setEmployee(employeeinfo);
    }
    function handlePhoneNumber(event) {
        let employeeinfo = { ...employee }
        employeeinfo["PhNumber"] = event.target.value;
        setEmployee(employeeinfo);
    }
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/employeeList/${id}`)
                .then((Response) => {
                    setEmployee(Response.data);
                })
        }
    },[]);
    function handleSave() {
        if (!employee.ID || !employee.Name) {
            alert("Please Enter Details");
        }
        if (id) {
            axios.put(`http://localhost:3001/employeeList/${id}`, employee)
                    .then((Response) => {
                    console.log(Response.data);
                    navigate("/project")
                })
        }
        else {
            axios.post("http://localhost:3001/employeeList", employee)
                .then((Response) => {
                    console.log(Response.data);
                    navigate("/project")
                })
        }

    }
    return (
        <div className="outersection">
            <h1>Add Employee</h1>
            <div className="boxSection">
                <div className="singleinputsection">
                    <label> Employee ID : </label>
                    <input type="text" value={employee.ID} onChange={handleEmployeeId} className="inputsectionuser" />
                </div>
                <div className="singleinputsection">
                    <label>Name : </label>
                    <input type="text" value={employee.Name} onChange={handleName} className="inputsectionuser" />
                </div>
                <div className="singleinputsection">
                    <label>Email : </label>
                    <input type="email" value={employee.Email} onChange={handleEmail} className="inputsectionuser" />
                </div>
                <div className="singleinputsection">
                    <label>Date Of Birth : </label>
                    <input type="date" value={employee.Dob} onChange={handleDob} className="inputsectionuser" />
                </div>
                <div className="genderSection">
                    <label>Gender :</label>
                    <div className="genderGroup">
                        <label>
                            <input type="radio" value="male" onChange={handleGender} checked={employee.Gender === "male"} />
                            Male
                        </label>
                        <label>
                            <input type="radio" value="female" onChange={handleGender} checked={employee.Gender === "female"} />
                            Female
                        </label>
                        <label>
                            <input type="radio" value="other" onChange={handleGender} checked={employee.Gender === "other"} />
                            Other
                        </label>
                    </div>
                </div>

                <div className="singleinputsection">
                    <label>Address : </label>
                    <input type="text" value={employee.Address} onChange={handleAddress} className="inputsectionuser" />
                </div>
                <div className="singleinputsection">
                    <label> Phone Number : </label>
                    <input type="number" value={employee.PhNumber} onChange={handlePhoneNumber} className="inputsectionuser" />
                </div>
                <div><button onClick={handleSave} className="savebutton">Save</button></div>
            </div>


        </div>
    );
}