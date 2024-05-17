import { useParams } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux';
import { useState } from "react";
import React from "react";
import {updateUser} from './UserReducer'
import { useNavigate } from "react-router-dom";

export default function Update() {

    const{id} =useParams();
    const users =useSelector((state)=> state.users);
    const existinguish =users.filter(f =>f.id == id);
    const {name,email} =existinguish[0];
    const[upname,setName] = useState(name)
    const[upemail,setEmail] = useState(email)

    const dispatch =useDispatch();
    const navigate =useNavigate()

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: upname,
            email:upemail
        }))
        navigate('/')
    }

    return(

        <div className="container-fluid my-5">
    <h2>Update New User</h2>
        <form onClick={handleUpdate}>
  
        <div class="mb-3">
          <label for="Name" class="form-label">Name</label>
          <input type="text" class="form-control" name="name" value={upname} onChange={e => setName(e.target.value)}/>
        </div>

        <div class="mb-3">
          <label for="Name" class="form-label">Email  address</label>
          <input type="email" class="form-control" name="email" value={upemail}   aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}/>
          
        </div>
       
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    )
}
   