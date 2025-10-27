import { useState } from "react";
import "./Dashboard.css"

export default function Dashboard() {
    const [degree, setDegree] = useState(0);
    const [fromUnit, setFromUnit] = useState("°C");
    const [toUnit, setToUnit] = useState("Celsius");
    const [output, setOutput] = useState();
    const [outputunit, setoutputUnit] = useState("");

    function handleDegreeChange(event) {
        setDegree(event.target.value);
    }

    function handleFromUnitChange(event) {
        const selectedUnit = event.target.value;
        setFromUnit(selectedUnit);
        if (selectedUnit === "°C") {
            setToUnit("Fahrenheit");
        } else if (selectedUnit === "°F") {
            setToUnit("Celsius");
        }
    }

    function handleToUnitChange(event) {
        const selectedUnit = event.target.value;
        setToUnit(selectedUnit);
        if (selectedUnit === "Fahrenheit") {
            setFromUnit("°C");
        } else if (selectedUnit === "Celsius") {
            setFromUnit("°F");
        }
    }

    function handleConvertButton() {
        console.log(degree, fromUnit, toUnit);

        if (toUnit === "Fahrenheit") {
            let output1 = (degree * 9 / 5) + 32;
            setOutput(output1);
            setoutputUnit("F");
        } 
        else if (toUnit === "Celsius") {
            let output2 = ((degree - 32) * 5) / 9;
            setOutput(output2);
            setoutputUnit("C");
        }
    }

    return (
        <div className="backgroundsection">
            <div className="Boxsection">
                <div className="inputsectionbox">
                    <div className="actionname">Enter Temperature</div>
                    <div className="labelname">
                        <label>Degree</label>
                    </div>
                    <div>
                        <input type="number" value={degree} onChange={handleDegreeChange} />
                        <select className="selecttag1" value={fromUnit} onChange={handleFromUnitChange}>
                            <option>°C</option>
                            <option>°F</option>
                        </select>
                    </div>
                    <div className="labelname"><label>Convert In</label></div>
                    <select className="selecttag2" value={toUnit} onChange={handleToUnitChange}>
                        <option>Celsius</option>
                        <option>Fahrenheit</option>
                    </select>
                    <div className="actionbutton">
                        <button onClick={handleConvertButton}>
                            Convert <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <div className="outputsection">
                        <h1>{output} <sup>°{outputunit}</sup></h1>
                </div>
            </div>
        </div>
    );
}
