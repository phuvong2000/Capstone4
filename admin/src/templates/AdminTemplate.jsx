import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../components/HeaderAdmin'
const AdminTemplate = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <div id="main">
                <HeaderAdmin></HeaderAdmin>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default AdminTemplate