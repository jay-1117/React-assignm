import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";
export default function Create() {


    const[name,setName] = useState('')
    const[email,setEmail] = useState('')

    const dispatch = useDispatch();
    const navigate =useNavigate()

    const users =useSelector((state)=> state.users);

    const handleSubmit = (event) => {

        event.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1,name,email }))
        navigate('/')
    }

    return(
<div className="container-fluid my-5">
    <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
  
        <div class="mb-3">
          <label for="Name" class="form-label">Name</label>
          <input type="text" class="form-control" name="name" onChange={e =>setName(e.target.value)}/>
        </div>

        <div class="mb-3">
          <label for="Name" class="form-label">Email  address</label>
          <input type="email" class="form-control" name="email"  aria-describedby="emailHelp" onChange={e =>setEmail(e.target.value)}/>
          
        </div>
       
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    )
}