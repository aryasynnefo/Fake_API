import React, { useState } from "react";
import axios from "axios";

export default function Register(props) {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post("http://localhost:8000/api/register",data).then(() => {
            alert("Success");
        })
        .catch(error => {
            console.log(error);
            alert("failed");
        })
    }
    return(
        <div className="reg">
            <form onSubmit={submitHandler}>
                username: <input type="text" name="username" onChange={(e) => setData({...data, username: e.target.value})} /> <br/>
                email: <input type="email" name="email" onChange={(e) => setData({...data, email: e.target.value})} /> <br/>
                pass: <input type="password" name="password" onChange={(e) => setData({...data, password: e.target.value})} /> <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}