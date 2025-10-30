import { useState } from "react";
import "./Dashboard.css";
export default function Dashboard() {
    const [amount ,setAmount]=useState();
    const[fromCurrency, setFromCurrency]=useState("INR");
    const[toCurrency, setToCurrency]=useState("USD");
    const[amountConverted, setAmountConverted]=useState();
    function handleAmount(event){
        setAmount(event.target.value);
    }
    function handleFromCurrency(event){
        setFromCurrency(event.target.value);
    }
    function handleToCurrency(event){
        setToCurrency(event.target.value);
    }
    function handleConvertButton(){
        console.log(amount);
        
        if(fromCurrency=== "INR"){
            if(toCurrency==="INR"){
                setAmountConverted(amount);
            }
            if(toCurrency==="USD"){
                setAmountConverted(amount/88);
            }
            if(toCurrency==="EURO"){
                setAmountConverted(amount/102);
            }
        }
        if(fromCurrency=== "USD"){
            if(toCurrency==="USD"){
                setAmountConverted(amount);
            }
            if(toCurrency==="INR"){
                setAmountConverted(amount*88);
            }
            if(toCurrency==="EURO"){
                setAmountConverted(amount/1.16);
            }
        }
        if(fromCurrency=== "EURO"){
            if(toCurrency==="EURO"){
                setAmountConverted(amount);
            }
            if(toCurrency==="INR"){
                setAmountConverted(amount*102);
            }
            if(toCurrency==="USD"){
                setAmountConverted(amount*1.16);
            }
        }

    }
    return (
        <div className="body">
            <div><div className="header">
                Currency Converter
            </div>
                <div className="outerbox">
                   <input type="text" value={amount} onChange={handleAmount}/><br/>
                    <label>From</label>
                    <select value={fromCurrency} onChange={handleFromCurrency}>
                        <option>INR</option>
                        <option>USD</option>
                        <option>EURO</option>
                    </select>
                    <label>To</label>
                    <select value={toCurrency} onChange={handleToCurrency}>
                        <option>INR</option>
                        <option>USD</option>
                        <option>EURO</option>
                    </select>
                    <div className="button"><button onClick={handleConvertButton}>Convert</button></div>
                    <div>{amountConverted}</div>
                </div>
            </div>
        </div>
    );
}