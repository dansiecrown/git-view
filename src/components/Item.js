import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ViewProvider } from '.././ViewContext';
import { useView, useViewUpdate } from '.././ViewContext';


export default function Item() {

    const view = useView();

    console.log(view);

    return (
        <ViewProvider >
            <div className="item">
                <div className="contain">
                    <div className="item-item">
                        <h1>{view.name}</h1>
                        <p><span className="title">Author: </span> {view.owner.login}</p>
                        <p><span className="title">Visbility: </span> {view.visibility}</p>
                        <p><span className="last-title">Default Branch: </span> {view.default_branch}</p>
                        <a className="git-btn" href={view.html_url} target="_blank" rel="noreferrer">View on Github</a>
                    </div>
                    <Link to="/list" className="home-btn">Back</Link>
                </div>

            </div>
        </ViewProvider>
    )
}
