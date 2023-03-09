import React from 'react'
import { Link, useLocation } from "react-router-dom"
// images
import Logo from "./../../../assets/img/logoMark.svg"
import { ReactComponent as DashboardIcon } from "./../../../assets/img/dashboardIcon.svg"
import { ReactComponent as TaskIcon } from "./../../../assets/img/taskIcon.svg"
// stylos
import "./sidebar.css"

const Sidebar = () => {
    const useCurrentPath = (path) => {
        const location = useLocation()
        return location.pathname === path ? "active" : null
    }

    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src={Logo} alt="logo ravn" />
            </div>
            <Link to="/" className={useCurrentPath("/")}>
                <DashboardIcon />
                DASHBOARD
            </Link>
            <Link to="/task" className={useCurrentPath("/task")}>
                <TaskIcon />
                MY TASK
            </Link>
        </div>
    )
}

export default Sidebar