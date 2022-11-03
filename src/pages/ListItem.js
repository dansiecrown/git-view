import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useView, useViewUpdate } from '../ViewContext';
import Spinner from "../components/Spinner"


export default function ListItem({ list, onChange, page, isLoading }) {
    const navigate = useNavigate();
    const updateView = useViewUpdate();

    let repos = []

    const selected = (item) => {
        updateView(item)
        navigate(`/${item.id}`)
        console.log(item)
    }

    list.map((item, index) => {
        repos.push(
            <div key={item.id} i={index} className="repo" >
                <div className="contain">
                    <div className="row">
                        <h3>{item.name}</h3>

                        <a target="_blank" rel="noreferrer" onClick={() => {
                            selected(item)
                            updateView(item)
                        }}>View</a>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div>

            <h1>Repositories</h1>

            <div className="numbers">
                <button onClick={() => onChange(page + 1)} disabled={page === 1 ? true : false}>previous</button>
                <button onClick={() => onChange(1)} disabled={page === 1 ? true : false}>1</button>
                <button onClick={() => onChange(2)} disabled={page === 2 ? true : false}>2</button>
                <button onClick={() => onChange(3)} disabled={page === 3 ? true : false}>3</button>
                <button onClick={() => onChange(4)} disabled={page === 4 ? true : false}>4</button>
                <button onClick={() => onChange(page + 1)} disabled={page === 4 ? true : false}>Next</button>
                <Link to="/" className="btn-home">Home</Link>
            </div>

            {isLoading ? <Spinner /> : repos}


        </div>

    )
}
