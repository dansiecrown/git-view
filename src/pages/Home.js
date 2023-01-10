import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from "../components/Nav"


export default function Home() {

    return (
        <div className="home">
            <Nav />
            <Outlet />

        </div>
    )
}
