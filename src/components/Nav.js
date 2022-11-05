import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="nav">
            <h3>Deetechy</h3>
            <div className="menu">
                <Link to="err">Error Test</Link>
                <Link to="/">Home</Link>
                <Link to="list">My Repos</Link>
            </div>
        </div>
    )
}
