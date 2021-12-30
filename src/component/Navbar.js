import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <section>
            <nav className='navbar'>
                <span className='logo'></span>
                <div className='linksNav'>
                    <Link className='link' to='/component/HomePage'>Home</Link>
                    <Link className='link' to='/component/favorite'>Favorit Recipe</Link>
                    <Link className='link' to='/component/Recipe'>Add Recipe</Link>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
