
import React, { useState } from 'react';


const inputStyles = { marginBottom: 10 };


export default function SimpleForm() {


    const [firstInputValue, setFirstInputValue] = useState('it wooorks  😉');

    const [secondInputValue, setSecondInputValue] = useState('wohooooo 😀');



    const onFirstInput = (e) => {

        // let inputData = e.target.value;

        // setFirstInputValue(inputData);

        let { value } = e.target;
        setFirstInputValue(value);


    };

    const onSecondInput = (e) => {

     setSecondInputValue(e.target.value);

    };


    return (
        <div>
            <h2>Simple Form 🦾 </h2>
            <form>
                <div style={inputStyles}>
                    <label htmlFor="input-1">First input: </label>
                    <input onChange={onFirstInput} id="input-1" type="text" />
                </div>
                <div>
                    <label htmlFor="input-2"> Second input: </label>
                    <input onChange={onSecondInput} id="input-2" type="text" />
                </div>
            </form>
            <div>
                <p>1️⃣ Data from First  input : {firstInputValue} </p>
                <p>2️⃣ Data from Second input : {secondInputValue} </p>
            </div>

        </div>
    );
}




