import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Logout from './Logout';

const Header = () => (
    <div className="header">
        <Logo />
        <div className="nav">
            <ul>
                <li><NavLink to="/contacts" activeClassName="is-active" exact={true}>All Contacts</NavLink></li>
                <li><NavLink to="/create" activeClassName="is-active">New Contact</NavLink></li>
                <Logout />
                <li><NavLink to="/settings" activeClassName="is-active">Settings</NavLink></li>
            </ul>
        </div>
        
    </div>
);

export default Header;