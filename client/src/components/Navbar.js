import React, {useContext} from 'react'
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/auth.context";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper indigo darken-4">
                <a href="/" className="brand-logo center">To-do list</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                    <li><NavLink to="/create">Создать список</NavLink></li>
                    <li><NavLink to="/lists">Все списки</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}