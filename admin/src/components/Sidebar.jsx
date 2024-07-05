import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const toggleNav = () => {
        const sidebar = document.getElementById("mySidebar");
        sidebar.classList.toggle("closed");
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle("open");
        }
    };

    return (
        <div id="mySidebar" className="sidebar">
            <div className="sidebar-header">
                <h3><img className='w-75' src="image/logo.png" alt="logo-cyber" /></h3>
                <button className="toggle-btn" onClick={toggleNav}>
                    <i className="fas fa-bars" />
                </button>
            </div>
            <NavLink to="courseManagement"><i className="fa fa-book"></i> <span>Quản lý khoá học</span></NavLink>
            <NavLink to="userManagement"><i className="fa fa-user"></i> <span>Quản lý người dùng</span></NavLink>
        </div>
    );
};

export default Sidebar;
