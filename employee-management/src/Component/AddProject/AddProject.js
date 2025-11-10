import { useState } from "react";
import "./AddProject.css"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
export default function AddProject(){
    const navigate =useNavigate();
    const[projectDetails,setProjectDetails]=useState({
        ProjectName:"",
        ProjectInfo:""
    });
    function handleProjectName(event) {
        let project = { ...projectDetails }
        project["ProjectName"] = event.target.value;
        setProjectDetails(project);
    }
    function handleProjectDetails(event) {
        let project = { ...projectDetails }
        project["ProjectInfo"] = event.target.value;
        setProjectDetails(project);
    }
    function handleAddProject() {
        if (!projectDetails.ProjectName || !projectDetails.ProjectInfo) {
            alert("Please fill all fields");
            return;
        }

        axios.post("http://localhost:3001/ProjectInformation", projectDetails)
            .then((response) => {
                console.log(response.data);
                navigate("/project");
            })
    }

    
    return(
        <div className="backgrounddiv">
            <div className="boxDiv">
                <input type="text" placeholder="Enter Project Name" value={projectDetails.ProjectName} onChange={handleProjectName} className="inputprojectName"/ ><br/>
                <textarea type="text" placeholder="Enter Project details" value={projectDetails.ProjectInfo} onChange={handleProjectDetails} className="inputprojectDetails"/ >
                <button className="saveProjectButton" onClick={handleAddProject}>Save</button>


            </div>

        </div>
    );
}