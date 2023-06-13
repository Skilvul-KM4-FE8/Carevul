import React from "react";
import { useState } from "react";

function BmiCalculator(){
    const [weight, setWeight]=useState(0);
    const [height, setHeight]=useState(0);
    const [bmi, setBmi]=useState('');
    const [message, setMessage]=useState('');
    
    let imgsrc;
    let calculatebmi = (event) => {
        event.preventDefault();
        if(weight === 0 || height === 0){
            alert("invalid input");
        }
        else {
            let bmi=(weight / (height / 100) ** 2)
            setBmi(bmi.toFixed(2))

            if(bmi<18.5){
                setMessage("Berat badanmu masih dibawah rata-rata")
            }else if(bmi>=18.5 && bmi<24.9){
                setMessage("Berat badanmu normal!")
            }else{
                setMessage("Kamu kelebihan berat badan")
            }
        }
    }


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
                    <img src={imgsrc} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default BmiCalculator;