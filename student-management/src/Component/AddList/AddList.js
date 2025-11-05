import { useEffect, useState } from "react"
import "./AddList.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function AddList() {
    const [studentdata, setStudentData] = useState();
    const navigate = useNavigate();
    // const [studentID, setStudentID] = useState();
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [phNumber, setPhNumber] = useState();
    // const [dob, setDob] = useState();
    // const [gender, setGender] = useState();
    // // const[male,setMale]=useState();
    // // const[female,setFemale]=useState();
    // // const[other,setOther]=useState();
    // const [course, setCourse] = useState();
    // const [year, setYear] = useState();
    // const [enrollmentDate, setEnrollmentDate] = useState();
    // const [grade, setGrade] = useState();
    const [student, setStudent] = useState({
        studentID: "",
        name: "",
        email: "",
        phNumber: "",
        dob: "",
        gender: "",
        course: "",
        year: "",
        enrollmentDate: "",
        grade: ""
    })
    const { id } = useParams();

    function handleStudentId(event) {
        let studentinfo = { ...student }
        studentinfo["studentID"] = event.target.value;
        setStudent(studentinfo);
    }
    function handleName(event) {
        let studentinfo = { ...student }
        studentinfo["name"] = event.target.value;
        setStudent(studentinfo);
    }
    function handleEmail(event) {
        let studentinfo = { ...student }
        studentinfo["email"] = event.target.value;
        setStudent(studentinfo);
    }
    function handlePhoneNumber(event) {
        let studentinfo = { ...student }
        studentinfo["phNumber"] = event.target.value;
        setStudent(studentinfo);
    }
    function handleDob(event) {
        let studentinfo = { ...student }
        studentinfo["dob"] = event.target.value;
        setStudent(studentinfo);
    }
    function handleGender(event) {
        let studentinfo = { ...student }
        studentinfo["gender"] = event.target.value;
        setStudent(studentinfo);
    }
    function handleCourse(event) {
        let studentinfo = { ...student }
        studentinfo["course"] = event.target.value;
        setStudent(studentinfo);
    }
    function handleYear(event) {
        let studentinfo = { ...student }
        studentinfo["year"] = event.target.value;
        setStudent(studentinfo);
    }
    function handleEnrollmentDate(event) {
        let studentinfo = { ...student };
        studentinfo["enrollmentDate"] = event.target.value;
        setStudent(studentinfo);
    }

    function handleGrade(event) {
        let studentinfo = { ...student }
        studentinfo["grade"] = event.target.value;
        setStudent(studentinfo);
    }

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/studentInformation/${id}`)
                .then((response) => {
                    console.log(response.data);
                    setStudent(response.data)

                })
        }

    }, [id])

    function handleSave() {
        // console.log(studentID, name, email, phNumber, dob, gender, course, year, enrollmentDate, grade);

        // const studentdata = {
        //     studentID: studentID,
        //     name: name,
        //     email: email,
        //     phNumber: phNumber,
        //     dob: dob,
        //     gender: gender,
        //     course: course,
        //     year: year,
        //     enrollmentDate: enrollmentDate,
        //     grade: grade,

        // }
        if (id) {
            axios.put(`http://localhost:3001/studentInformation/${id}`, student)
                .then((response) => {
                    console.log(response.data);
                    navigate("/studentlist");
                })
        } else {
            //     if (!student.name) {
            //     alert("Please Enter Details");
            //     return;
            // }
            axios.post("http://localhost:3001/studentInformation", student)
                .then((response) => {
                    console.log(response.data);
                    navigate("/studentlist");
                })
        }



    }
    return (
        <div className="background">
            <div className="boxsection">
                <div className="singleinformation">
                    <label>Student ID :</label>
                    <input type="text" value={student.studentID} onChange={handleStudentId} />
                </div>
                <div className="singleinformation">
                    <label>Student Name :</label>
                    <input type="text" value={student.name} onChange={handleName} />
                </div>
                <div className="singleinformation">
                    <label>Email :</label>
                    <input type="text" value={student.email} onChange={handleEmail} />
                </div>
                <div className="singleinformation">
                    <label>Phone Number :</label>
                    <input type="text" value={student.phNumber} onChange={handlePhoneNumber} />
                </div>
                <div className="singleinformation">
                    <label>Date Of Birth :</label>
                    <input type="date" value={student.dob} onChange={handleDob} />
                </div>
                <div className="singleinformation">
                    <label>Gender</label>
                    <input type="radio" value={"Male"} onChange={handleGender} checked={student.gender === "Male"} />Male
                    <input type="radio" value={"Female"} onChange={handleGender} checked={student.gender === "Female"} />Female
                    <input type="radio" value={"Other"} onChange={handleGender} checked={student.gender === "Other"} />Other
                </div>
                <div className="singleinformation">
                    <label>Course :</label>
                    <input type="text" value={student.course} onChange={handleCourse} />
                </div>
                <div className="singleinformation">
                    <label>Year/Semister :</label>
                    <input type="text" value={student.year} onChange={handleYear} />
                </div>
                <div className="singleinformation">
                    <label>Enrollment Date :</label>
                    <input type="date" value={student.enrollmentDate} onChange={handleEnrollmentDate} />
                </div>
                <div className="singleinformation">
                    <label>Grade/CGPA :</label>
                    <input type="text" value={student.grade} onChange={handleGrade} />
                </div>
                <div><button onClick={handleSave}>Save</button></div>
            </div>

        </div>
    );
}