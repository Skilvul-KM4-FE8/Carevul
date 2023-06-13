import React from "react";
import { useState } from "react";

function BmiCalculator(){
    const [weight, setWeight]=useState(0);
    const [height, setHeight]=useState(0);
    const [bmi, setBmi]=useState('');
    const [message, setMessage]=useState('');
    
    return (
        <div className="app">
            <div className="container">
                <h2></h2>
                <form onSubmit={calculatebmi}>
                    <div>
                        <label>Weight (Kg)</label>
                        <input value={weight} onChange={(e) => setWeight(e.target.value)}/>
                    </div>
                    <div>
                        <label>Height (Cm)</label>
                        <input value={height} onChange={(e) => setHeight(e.target.value)}/>
                    </div>
                    <button className="btn" type="submit">Submit</button>
                    <button className="btn btn-outline" type="submit">Reload</button>
                </form>
                <div className="center">
                    <h3>Your BMI is : 
                        {bmi}
                    </h3>
                </div>
                <div className="img-container">
                    <img src={imgbmi} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default BmiCalculator;