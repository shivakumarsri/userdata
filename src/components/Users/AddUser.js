import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser=()=>{
    let navigate=useNavigate;
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:""
    });

    const {name,username,email,phone}=user;
    const onInputChange=e=>{
        console.log(e.target.value);
        setUser({...user, [e.target.name]:e.target.value})
    }

    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3004/users",user);
        navigate.push("/")
    }

    return(
        <div className="container">
            <Link className="btn btn-primary  mt-4" to="/home" >Back to Home</Link>
            <form class="row g-3" onSubmit={e=>onSubmit(e)}>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" value={name} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-md-6">
                    <label for="inputUsername" class="form-label">Username</label>
                    <input type="text" class="form-control" name="username" value={username} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-12">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" value={email} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-12">
                    <label for="inputPhoneNo" class="form-label">Mobile No.</label>
                    <input type="text" class="form-control" name="phone" value={phone} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-12">
                    <button class="btn btn-primary">Add User</button>
                </div>
            </form>
        </div>
    )
}
export default AddUser;