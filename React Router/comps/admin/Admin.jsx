import React, { Suspense, lazy } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
const Adminprofile = lazy(() => import('./Adminprofile'));
const Adminwork = lazy(() => import('./Adminwork'));



export default function Admin() {
    return (
        <div className='container-fluid'>
            <h1 className='bg-primary text-white'>Admin Section</h1>
            <nav>
                <ul className='list-unstyled d-flex'>
                    <li>
                        <Link className="text-decoration-none" to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link className="text-decoration-none list-style-none mx-3" to="work">Work</Link>
                    </li>
                </ul>
            </nav>
            <Suspense fallback={<div>Loading admin sections...</div>}>
                <Routes>
                    <Route path="profile" element={<Adminprofile />} />
                    <Route path="work" element={<Adminwork />} />
                </Routes>
            </Suspense>
            <Outlet />
        </div>
    )
}
