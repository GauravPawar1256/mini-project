import "./StudentList.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentList() {
    const navigate = useNavigate();
    const [studentdata, setStudentData] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);

    const [searchStudent, setSearchStudent] = useState("");
    function handleSearchStudent(event) {
        setSearchStudent(event.target.value);
    }
    function handleSearchClick() {
        const term = searchStudent.toLowerCase();

        const filtered = studentdata.filter((student) =>{
            student.name.toLowerCase().includes(term) || student.studentID.toLowerCase().includes(term) ||
            student.email.toLowerCase().includes(term) || student.course.toLowerCase().includes(term)
    });

        setFilteredStudents(filtered);
    }

    useEffect(() => {
        axios.get("http://localhost:3001/studentInformation", studentdata)
            .then((response) => {
                console.log(response.data);

                setStudentData(response.data)
                setFilteredStudents(response.data)
            })

    }, []);
    function getjsonData() {
        axios.get("http://localhost:3001/studentInformation")
            .then((response) => {
                console.log(response.data);

                setStudentData(response.data)
            })
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:3001/studentInformation/${id}`)
            .then((response) => {
                console.log(response.data);
                alert("Student Deleted");
                getjsonData();
            })
    }

    function handleEdit(id) {
        navigate(`/${id}`);

    }
    function handleAddStudentButton() {
        navigate("/");
    }

    return (
        <div>
            <div className="outerbody">
                <div><h1>Student Management System</h1></div>
                <div className="searchbar"><input type="text" value={searchStudent} onChange={handleSearchStudent} /><button onClick={handleSearchClick}>Search</button></div>
                <div>
                    <table border={1}>
                        <tr>
                            <th>Sr.No</th>
                            <th> Student ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Date Of Birth</th>
                            <th>Gender</th>
                            <th>Course/Program</th>
                            <th>Year/Semister</th>
                            <th>Enrollment Date</th>
                            <th>Grade/CGPA</th>
                            <th>Action Buttons</th>
                        </tr>
                        {filteredStudents?.map((singleStudent, index) => {
                            return <tr>
                                <td>{index + 1}</td>
                                <td>{singleStudent.studentID}</td>
                                <td>{singleStudent.name}</td>
                                <td>{singleStudent.email}</td>
                                <td>{singleStudent.phNumber}</td>
                                <td>{singleStudent.dob}</td>
                                <td>{singleStudent.gender}</td>
                                <td>{singleStudent.course}</td>
                                <td>{singleStudent.year}</td>
                                <td>{singleStudent.enrollmentDate}</td>
                                <td>{singleStudent.grade}</td>
                                <td><button onClick={() => handleEdit(singleStudent.id)}>Edit</button>
                                    <button onClick={() => handleDelete(singleStudent.id)}>Delete</button></td>
                            </tr>
                        })}
                    </table>
                    <div><button onClick={handleAddStudentButton}>Add Student</button></div>
                </div>
            </div>
        </div>
    );
}