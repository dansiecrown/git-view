import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useViewUpdate } from '../ViewContext';
import Spinner from "../components/Spinner"


export default function ListItem({ list, onChange, page, isLoading, changeHandle, selectUser, user }) {
    const navigate = useNavigate();
    const updateView = useViewUpdate();



    let repos = []

    const selected = (item) => {
        updateView(item)
        navigate(`/list/${item.id}`)
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
            <div className="user">
                <h1>{user}</h1>
                <div className="select-user">
                    <input placeholder="Enter your github UserName" onChange={(e) => changeHandle(e)} />
                    <button onClick={() => selectUser()} >Select User</button>
                </div>
            </div>



            {isLoading ? <Spinner /> : repos}

            <div className="numbers">
                <button onClick={() => onChange(page + 1)} disabled={page === 1 ? true : false}>previous</button>
                <button onClick={() => onChange(1)} disabled={page === 1 ? true : false}>1</button>
                <button onClick={() => onChange(2)} disabled={page === 2 ? true : false}>2</button>
                <button onClick={() => onChange(3)} disabled={page === 3 ? true : false}>3</button>
                <button onClick={() => onChange(4)} disabled={page === 4 ? true : false}>4</button>
                <button onClick={() => onChange(page + 1)} disabled={page === 4 ? true : false}>Next</button>
                <Link to="/" className="btn-home">Home</Link>
            </div>
        </div >

    )
}
