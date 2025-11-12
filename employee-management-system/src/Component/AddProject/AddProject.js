import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddProject() {
    const { id } = useParams();
    const navigate = useNavigate();
    const[projectDetails ,setProjectDetails]=useState({
        projectName:"",
        projectDetails:"",
        postEmployee:""
    });
    function handleProjectName(event){
        let projectInfo ={...projectDetails}
        projectInfo["projectName"]=event.target.value;
        setProjectDetails(projectInfo);
    }
    function handleProjectDetails(event){
        let projectInfo ={...projectDetails}
        projectInfo["projectDetails"]=event.target.value;
        setProjectDetails(projectInfo);
    }
    // function handlePostEmployee(event){
    //     let projectInfo ={...projectDetails}
    //     projectInfo["postEmployee"]=event.target.value;
    //     setProjectDetails(projectInfo);
    // }
    function handleAllEmployeeList() {
        navigate("/employeelist");
    }
    function handleAllProjects() {
        navigate("/")
    }
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:4200/projectInformation/${id}`)
                .then((res)=>{
                    setProjectDetails(res.data);
                })
        }
    }, [id]);

   function handleSaveProject() {
        if (id) {
            axios.put(`http://localhost:4200/projectInformation/${id}`, projectDetails)
                .then(() => navigate("/"))
        } else {
            axios.post("http://localhost:4200/projectInformation", projectDetails)
                .then(() => navigate("/"))
        }
    }
    return (
        <div className="m-0 bg-slate-200 min-h-screen">
            <div className="bg-gray-800 text-white flex justify-between px-8 py-4 items-center">
                <div className="text-2xl font-bold">Add Project</div>
                <div>
                    <button className="bg-white text-black font-semibold px-3 py-1 rounded-md mx-2 hover:bg-gray-200 transition" onClick={handleAllProjects}> All Project</button>
                    <button className="bg-white text-black font-semibold px-3 py-1 rounded-md mx-2 hover:bg-gray-200 transition" onClick={handleAllEmployeeList}> All Employee </button>
                </div>
            </div>
            <div className="flex justify-center items-center py-10">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Project Name</label>
                            <input type="text" value={projectDetails.projectName} onChange={handleProjectName} placeholder="Enter Project name" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Project Details</label>
                            <textarea type="text" value={projectDetails.projectDetails} onChange={handleProjectDetails} placeholder="Enter employee ID" className="w-full border border-gray-300 rounded-md p-2 h-48 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <button className="w-full bg-gray-800 text-white font-semibold py-2 rounded-md mt-4 hover:bg-green-700 transition">Post employee</button>
                        <button className="w-full bg-gray-800 text-white font-semibold py-2 rounded-md mt-4 hover:bg-green-700 transition" onClick={handleSaveProject}>Add Project</button>
                   
                </div>
            </div>
        </div>
    );
}