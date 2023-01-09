import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonForm= () => {
    const [ message, setMessage ] = useState("Message loading in your mom");
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))
            .catch(err=>console.log(err))
    }, []);
    return (
        <div>
            <h1>The message from your mom: {message}</h1>
        </div>
    )
}
export default PersonForm;