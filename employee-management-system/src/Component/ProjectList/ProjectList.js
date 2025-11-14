import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectList() {
    const navigate = useNavigate();
    const [projectdata, setProjectData] = useState([]);
    const [search, setSearch] = useState("");
    // const [filteredProjectsSearch, setFilteredProjectsSearch] = useState([]);
    function handleSearch(event) {
        setSearch(event.target.value);
        
    }
    // function handleSearchButton(){
    //     const filtered = projectdata.filter((project) => {
    //         const projectName = project?.projectName?.toLowerCase() || ""; 
    //         const searchTerm = search?.toLowerCase() || ""; 
    //         return projectName.includes(searchTerm);
    //     });
    //     setFilteredProjects
    // Search(filtered);
    // }
    const filteredProjects = projectdata.filter((project) =>
        project.projectName.toLowerCase().includes(search.toLowerCase())
    );
    function handleProjectDashboard(id) {
        navigate(`/projectdashboard/${id}`);
    }
    function handleAllEmployeeList() {
        navigate("/employeelist")
    }
    function handleAddProject() {
        navigate("/addproject")
    }
    function handleAddEmployee() {
        navigate("/addemployee")
    }
    useEffect(() => {
        axios.get("http://localhost:4200/projectInformation")
            .then((response) => {
                setProjectData(response.data);

            })

    }, [])
    return (
        <div className="m-0 bg-slate-200 min-h-screen ">
            <div className="flex flex-wrap bg-gray-800 text-white flex justify-between px-8 py-4 items-center ">
                <div className="text-2xl font-bold">Projects List</div>
                <div className="mt-4">
                    <input placeholder="Search Project" className=" text-gray-800 rounded-md p-1 border-l-0 rounded-r-none mt-2" value={search} onChange={handleSearch}/>
                    <button className="bg-white text-black font-semibold p-1 rounded-md border-l-0 rounded-l-none mt-2" > <i class="fa fa-search" aria-hidden="true"></i> Search</button>
                    <button className="bg-white text-black font-semibold p-1 rounded-md mx-2 mt-2" onClick={handleAllEmployeeList}>All Employee</button>
                    <button className="bg-white text-black font-semibold p-1 rounded-md mx-2  mt-2" onClick={handleAddEmployee}>Add Employee <i class="fa fa-sign-in" aria-hidden="true"></i> </button>
                    <button className="bg-white text-black font-semibold p-1 rounded-md  mx-2" onClick={handleAddProject}>Add Project <i class="fa fa-sign-in" aria-hidden="true"></i> </button>
                </div>
            </div>
            <div className=" flex flex-wrap gap-4 p-4  justify-center">
                {filteredProjects?.map((singleProject) => (<div className=" bg-gray-800 rounded-md shadow-lg shadow-red-500/50 ... text-center text-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                    <div className="h-[100px] overflow-y-auto  scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800 scrollbar-thumb-rounded">
                        <div className=" text-xl font-semibold m-0 break-words">{singleProject.projectName}</div>
                        <div className="m-2 break-words">{singleProject.projectDetails}</div>
                    </div>
                    <div>
                        <button className="bg-white text-gray-800 px-5 py-1 font-semibold rounded-md items-center m-2" onClick={() => handleProjectDashboard(singleProject.id)}>View Details</button>
                    </div>
                </div>))}
            </div>
        </div>
    );
}