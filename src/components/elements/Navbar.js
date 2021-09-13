import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav id="navbar" className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary border border-warning">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Contact Book
                    </Link>
                    <div>
                        <Link to="/contacts/add" className="btn btn-warning text-white  ml-auto border border-white">Create Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
