import React from "react";
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.nav__item}>
                    <NavLink to="/profile" className={ navData => navData.isActive ? s.active : "" }>Profile</NavLink>
                </li>
                <li className={s.nav__item}>
                    <NavLink to="/dialogs" className={ navData => navData.isActive ? s.active : "" }>Messages</NavLink>
                </li>
                <li className={s.nav__item}>
                    <NavLink to="news" className={ navData => navData.isActive ? s.active : "" }>News</NavLink>
                </li>
                <li className={s.nav__item}>
                    <NavLink to="music" className={ navData => navData.isActive ? s.active : "" }>Music</NavLink>
                </li>
                <li className={s.nav__item}>
                    <NavLink to="settings" className={ navData => navData.isActive ? s.active : "" }>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
} 

export default Navbar;