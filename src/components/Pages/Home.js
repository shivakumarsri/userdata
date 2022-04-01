import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        console.log("From Use Effect");
        loadUsers();

    },[])

    const loadUsers=async()=>{
        const result= await axios.get("http://localhost:3004/users");
        setUsers(result.data.reverse());
    }

    const deleteUser=async id=>{
        await axios.delete(`http://localhost:3004/users/${ id }`);
        loadUsers();
    }

    return(
        <div className="container">
            <div className="py-1">
                <h2>Home Page</h2>
                <table class="table shadow text-center">
                    <thead class="table-light">
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=>(
                                <tr>
                                    <th scope="row"> {index+1} </th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <Link class="btn btn-success" to={`/users/${user.id}`} > View </Link>
                                       <Link class="btn btn-warning"  to={`/users/edit/${user.id}`}> Edit </Link>
                                       <button class="btn btn-danger" onClick={()=> deleteUser(user.id)}> Delete </button>
                                    </td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div> 
    )
}
export default Home;