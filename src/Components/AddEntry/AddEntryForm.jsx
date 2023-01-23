import React, { useState } from 'react';


const AddEntryForm = (props) => {

    const [weight, setWeight] = useState(0);     //Const opens a new array to hold all of the entries. Bind them 
    const [date, setDate] = useState('');        //to thier inputs below by adding value. 

    function handleSubmit(event) {              //This function will keep the form from refreshing each time it is submitted. 
        event.preventDefault();
        let newEntry = {
            weight: weight,
            date: date
        };
        console.log(newEntry)
        props.addNewEntryProperty(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit}>          
            <label>Weight</label>
            <input type='number' value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))}/>  
            <label>Date</label>
            <input type='date' value={date} onChange={(event) => setDate(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default AddEntryForm;