import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddContact from "../AddContact/AddContact";
import ContactList from "../ContactList/ContactList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/addContact" element={<AddContact />} />
        <Route path="/" element={<ContactList />} />
        
      </Routes>
    </Router>
  );
}

export default App;
