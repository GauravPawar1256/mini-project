import logo from './logo.svg';
import './App.css';
import AddList from './Component/AddList/AddList';
import StudentList from './Component/StudentList/StudentList';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <AddList/>
      <StudentList/> */}
      <Router>
        <Routes>
          <Route path='/' element={<AddList/>}/>
          <Route path='studentlist' element={<StudentList/>}/>
          <Route path="//:id" element={<AddList />} />
        </Routes>
      </Router>
    </div>
      
  );
}

export default App;
