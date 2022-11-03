import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <h1> Welcome to My Altschool Project for the second semester</h1>
                <p> This is a simple app that uses the Github API to display a list of repositories for a user.The app uses React Router to navigate between pages. It also uses Context to pass data between components.</p>

                <Link to="/list" className="btn">Get Started</Link>
            </div>
        </div>
    )
}
