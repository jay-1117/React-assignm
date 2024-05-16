import React, { Suspense, lazy } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
const Userprofile = lazy(() => import('./Userprofile'));
const Userwork = lazy(() => import('./Userwork'));


export default function User() {
    return (
        <div className='container-fluid'>
            <h1 className='bg-primary text-white'>User Section</h1>
            <nav>
                <ul className='list-unstyled d-flex'>
                    <li>
                        <Link className='text-decoration-none' to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link className='text-decoration-none mx-3' to="work">Work</Link>
                    </li>
                </ul>
            </nav>
            <Suspense fallback={<div>Loading User sections...</div>}>
                <Routes>
                    <Route path="profile" element={<Userprofile />} />
                    <Route path="work" element={<Userwork />} />
                </Routes>
            </Suspense>
            <Outlet />
        </div>
    )
}
