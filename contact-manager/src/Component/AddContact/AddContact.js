import { useState } from "react";
import "./AddContact.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function AddContact() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    function handleDelete(){
        navigate('/')
    }
    function handleToSave(){
        let contactObj = { name: name, contactList: [number1, number2, number3] };
        console.log(contactObj);
        axios.post("http://localhost:3001/contactlist",contactObj)
         .then((Response) => {
                console.log(Response.data);
                    navigate("/");

            })
        

    }
    function handlename(event){
        setName(event.target.value)
    }
    function handleNumber1(event){
        setNumber1(event.target.value)
    }
    function handleNumber2(event){
        setNumber2(event.target.value)
    }
    function handleNumber3(event){
        setNumber3(event.target.value)
    }
    return (
        <div>
            <div>
                <label>Enter Name</label><br />
                <input type="text" value={name} onChange={handlename}/><br />
                <label>Enter Contact</label><br />
                <input type="number" value={number1} onChange={handleNumber1}/><br />
                <input type="number" value={number2} onChange={handleNumber2} /><br />
                <input  type="number" value={number3} onChange={handleNumber3}/><br />
            </div>
            <div className="button">
                <button onClick={handleToSave}>Save</button>
                <button onClick={handleDelete}>Cancel</button>
            </div>

        </div>
    );
}