import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonForm= () => {
    //keeps track of what is be typed via useState
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    //method that runs on submit button click
    const onSubmitHandler = (e) => {
        //stops the default behavior of a submit to refresh the page
        e.preventDefault();

        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
        .catch(err=>{console.log(err)})
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default PersonForm;