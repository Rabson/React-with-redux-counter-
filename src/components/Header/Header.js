import React from 'react';

import { Link } from 'react-router-dom'

const Header = () => (
    <div className="header">
        <Link to="/" className="logo">Todo World</Link>
        <div className="header-right">
            <Link className="active" to="/">Home</Link>
            <Link to="/showtodo">Show todo</Link>
            <Link to="/addtodo">Add todo</Link>
        </div>
    </div>
);

export default Header;