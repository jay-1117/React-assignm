import React from "react";
import  {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

export default function Home() {

    const users =useSelector((state)=> state.users);
    const dispatch =useDispatch();

    const handleDelet = (id) => {
        dispatch(deleteUser({id: id}))
    }


    return(

        <div className="container">
            <h2>crud Application</h2>
            <Link to="./create" className="btn btn-success my-3">create</Link>
           

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>handleDelet(user.id)}>Delete</button>
                            
                            <Link to= {`./update/${user.id}`}  className="btn btn-danger mx-3">Update</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}