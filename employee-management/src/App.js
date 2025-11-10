// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./Component/AddEmployee/AddEmployee";
import EmployeeList from "./Component/EmployeeList/EmployeeList";
import ProjectDashboard from "./Component/ProjectDashboard/ProjectDashboard";
import AddProject from "./Component/AddProject/AddProject";

function App() {
  return (
    <div>
      {/* <AddEmployee/>
      <EmployeeList/> */}
      <Router>
        <Routes>
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/project" element={<ProjectDashboard />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/edit/:id" element={<AddEmployee />} />
          <Route path="addproject" element={<AddProject />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
