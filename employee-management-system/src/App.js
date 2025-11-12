import logo from './logo.svg';
import './App.css';
import ProjectList from './Component/ProjectList/ProjectList';
import EmployeeList from './Component/EmployeeList/EmployeeList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from './Component/AddEmployee/AddEmployee';
import AddProject from './Component/AddProject/AddProject';
import ProjectDashboard from './Component/ProjectDashboard/ProjectDashboard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ProjectList/>}/>
          <Route path="/employeelist" element={<EmployeeList/>}/>
          <Route path="/addemployee" element={<AddEmployee/>}/>
          <Route path="/edit/:id" element={<AddEmployee/>}/>
          <Route path="/addproject" element={<AddProject/>}/>
          <Route path="/addproject/:id?" element={<AddProject/>}/>
          <Route path="/projectdashboard/:id?" element={<ProjectDashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
