import { useEffect, useState } from "react";
import "./ContactList.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ContactList() {
  const navigate = useNavigate();

  const [searchtext, setSearchText] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/contactlist")
      .then((response) => {
        const normalizedList = response.data.map(contact => ({
          ...contact,
          contactnumber: contact.contactnumber || contact.contactList || []
        }));
        setContactList(normalizedList);
        setFilteredList(normalizedList);
      })
      .catch((error) => {
        console.error("Error fetching contact list:", error);
      });
  }, []);

  function handleToSearchText(event) {
    setSearchText(event.target.value);
  }

  function handleToSearch() {
    const filtered = contactList.filter((singleContact) => {
      const nameMatch = singleContact.name.toLowerCase().includes(searchtext.toLowerCase());
      const numberMatch = singleContact.contactnumber.some(number =>
        number.toString().includes(searchtext)
      );
      return nameMatch || numberMatch;
    });
    setFilteredList(filtered);
  }

  const navigateToBack = () => {
    navigate("/addcontact");
  }

  return (
    <div className="body">
      <input type="text" value={searchtext} onChange={handleToSearchText} placeholder="Search name or number" />
      <button onClick={handleToSearch}>Search</button>
      <button onClick={navigateToBack}>+ Add Contact</button>

      {filteredList.map((singlecontact) => (
        <div key={singlecontact} className="contactcard">
          <div>Name: {singlecontact.name}</div>
          {singlecontact.contactnumber?.map((number, idx) => (
            <div key={idx}>Contact Number {idx + 1}: {number}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
