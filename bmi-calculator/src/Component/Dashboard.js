import { useState } from "react";
import "./Dashboard.css";
export default function Dashboard() {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [unit, setUnit] = useState("feet");
    const [convertedBmi, setConvertedBmi] = useState();
    const [Category, setCategory] = useState();

    function handleWeight(event) {
        setWeight(event.target.value);
    }
    function handleheight(event) {
        setHeight(event.target.value);
    }
    function handleUnit(event) {
        setUnit(event.target.value);
    }
    function handleCalculateBmi() {
        if (!weight || !height) {
            alert("Please enter all information");
            return;
        }

        let heightInMeters;
        if (unit === "feet") {
            heightInMeters = height * 0.3048;
        } else {
            heightInMeters = height / 100;
        }

        const calculatedBmi = weight / (heightInMeters * heightInMeters);
        setConvertedBmi(calculatedBmi.toFixed(2));

        let bmiCategory = "";
        if (calculatedBmi < 18) {
            bmiCategory = "Underweight";
        } else if (calculatedBmi >= 18 && calculatedBmi <= 25) {
            bmiCategory = "Healthy weight ";
        } else if (calculatedBmi >= 25 && calculatedBmi <= 30) {
            bmiCategory = "Overweight";
        } else if (calculatedBmi >= 30 && calculatedBmi < 35) {
            bmiCategory = "Obesity Class I";
        } else if (calculatedBmi >= 35 && calculatedBmi < 40) {
            bmiCategory = "Obesity Class II";
        } else if (calculatedBmi >= 40) {
            bmiCategory = "Obesity Class III";
        }

        setCategory(bmiCategory);
    }


    function handleReset() {
        setWeight("");
        setHeight("");
        setUnit("feet");
        setConvertedBmi("");
        setCategory("");
    }

    return (
        <div className="outerBody">
            <div className="boxsection">
                <div className="appname">
                    BMI Converter
                </div>
                <div>
                    <input type="number" value={weight} onChange={handleWeight} placeholder="Enter Weight(kg)" /><br />
                    <input type="number" value={height} onChange={handleheight} placeholder="Enter height(feet/cm)" className="heightinput" />
                    <select name="hello" value={unit} onChange={handleUnit}>
                        <option>feet</option>
                        <option>cm</option>
                    </select><br />
                    {/* <label>select height Unit
                        <select name="hello" value={unit} onChange={handleUnit}>
                            <option>feet</option>
                            <option>cm</option>
                        </select></label> */}
                    <div><button onClick={handleCalculateBmi}>Convert</button></div>
                    <div><button className="resetbutton" onClick={handleReset}>Reset</button></div>
                    {convertedBmi && <p>Your BMI is : <strong>{convertedBmi}</strong></p>}
                    <p>{Category}</p>

                </div>
            </div>
        </div>
    );
}