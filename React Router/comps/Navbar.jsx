import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='container-fluid'>
            <ul className='d-flex list-unstyled'>
                <li>
                    <Link className="text-decoration-none" to="/admin">Admin</Link>
                </li>
                <li>
                    <Link className="text-decoration-none my-3 mx-3" to="/user">User</Link>
                </li>
            </ul>
        </nav>
    )
}
