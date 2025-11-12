import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectDashboard() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [projectOnDashboard, setProjectOnDashboard] = useState([]);

    function handleAllEmployeeList() {
        navigate("/employeelist");
    }

    function handleAllProjects() {
        navigate("/");
    }

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:4200/projectInformation/${id}`)
                .then((response) => {
                    setProjectOnDashboard(response.data);
                })
            }
    }, [id]);
    function handleDeleteproject(id) {
        axios.delete(`http://localhost:4200/projectInformation/${id}`)
            .then((res) => {
                alert("Project Delete");
                navigate("/")
            })

    }
    function handleEditProject(id) {
        navigate(`/addproject/${id}`);
    }


    return (
        <div className="m-0 bg-slate-200 min-h-screen">
            <div className="bg-gray-800 text-white flex justify-between px-8 py-4 items-center">
                <div className="text-2xl font-bold">Project Dashboard</div>
                <div>
                    <button
                        className="bg-white text-black font-semibold px-3 py-1 rounded-md mx-2 hover:bg-gray-200 transition"
                        onClick={handleAllProjects}
                    >
                        All Projects
                    </button>
                    <button
                        className="bg-white text-black font-semibold px-3 py-1 rounded-md mx-2 hover:bg-gray-200 transition"
                        onClick={handleAllEmployeeList}
                    >
                        All Employees
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-start py-10">
                <div className="bg-white shadow-lg rounded-lg p-8 w-[60%] space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Project Name
                        </label>
                        <p className="w-full border border-gray-300 rounded-md p-2 bg-gray-100 font-bold">
                            {projectOnDashboard.projectName}
                        </p>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Project Details
                        </label>
                        <p className="w-full border border-gray-300 rounded-md p-2 bg-gray-100">
                            {projectOnDashboard.projectDetails}
                        </p>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Assigned Employees
                        </label>
                        <ol className="border border-gray-300 rounded-md p-2 bg-gray-100 list-decimal list-inside">
                            {projectOnDashboard.assignedEmployees?.map((employee) => (
                                <li>{employee}</li>
                            ))}
                        </ol>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button
                            className="w-full bg-gray-800 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
                            onClick={() => handleEditProject(projectOnDashboard.id)}

                        >
                            Edit
                        </button>

                        <button className="w-full bg-gray-800 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition" onClick={() => handleDeleteproject(projectOnDashboard.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
