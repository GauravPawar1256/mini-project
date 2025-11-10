import { useNavigate } from "react-router-dom";
import "./ProjectDashboard.css"
import { useEffect, useState } from "react";
import axios from "axios";
export default function ProjectDashboard() {
    const [projectcardinfo, setProjectCardInfo] = useState([]);
    const navigate = useNavigate();
    function handleAllEmployee() {
        navigate("/");
    }
    function handleAddEmployee() {
        navigate("/add")
    }
    function handleAddProject() {
        navigate("/addproject")
    }
    useEffect(() => {
        axios.get("http://localhost:3001/ProjectInformation")
            .then((Response) => {
                setProjectCardInfo(Response.data);
            })
    }, []);
    return (
        <div>
            <div className="headerSection1">
                <div className="headername">Project</div>
                <div>
                    <input className="inputSectionHeader" placeholder="Search Project" />
                    <button className="headerActionButtons">Search <i class="fa fa-search" aria-hidden="true"></i> </button>
                    <button className="headerActionButtons" onClick={handleAllEmployee}>All Employee <i class="fa fa-list-alt" aria-hidden="true"></i> </button>
                    <button className="headerActionButtons" onClick={handleAddEmployee}>Add Employee <i class="fa fa-user" aria-hidden="true"></i> </button>
                    <button className="headerActionButtons" onClick={handleAddProject}>Add Projects <i class="fa fa-plus-circle" aria-hidden="true"></i> </button>
                </div>
            </div>
            <div className="cardsection">
                {projectcardinfo?.map((singleProject) => {
                    return (<div className="cards">
                        <div className="infosectionproject">
                            <div className="projectname">{singleProject.ProjectName}</div>
                            <div>{singleProject.ProjectInfo}</div>
                        </div>
                        <div className="buttonsection">
                            <button className="assignedEmployeeButton">Assigned Employee</button>
                        </div>
                    </div>)
                })}
            </div>

        </div>
    );
}