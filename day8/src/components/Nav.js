import React, { Component } from 'react'
import  { Link } from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {
    render() {
        return (
            <nav>
                 <Link to = '/'>
                    <img width = "60" src = {"https://1000logos.net/wp-content/uploads/2017/08/Spotify-Logo.png"} alt = "store"
                    className = "menu-img" />
                </Link>
                <h3>Spotify</h3>
                <ul className="nav-links">
                    <Link to = "/addalbum " className = "nav-links-1">
                    <li>Add Album</li>
                    </Link>
                    <Link to = "/albums" className = "nav-links-2">
                    <li>Albums</li>
                    </Link>
                </ul>
            </nav>
            
    }
}

export default Nav