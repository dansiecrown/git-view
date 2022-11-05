import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from "../components/Nav"


export default function Home() {

    return (
        <div className="home">
            <div className="container">
                <h1> Welcome to My Altschool Project for the second semester</h1>
                <p> This is a simple app that uses the Github API to display a list of repositories for a user. The app uses React Router to navigate between pages. It also uses Context to pass data between components. <em>Bonus:</em> Added a functionality that allows you to enter your github username and then fetch your github repos.</p>



                <Link to="/list" className="btn">Get Started</Link>


            </div>
        </div>
    )
}
