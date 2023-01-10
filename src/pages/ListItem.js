import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useViewUpdate } from '../ViewContext';
import Spinner from "../components/Spinner"


export default function ListItem({ list, onChange, page, isLoading, changeHandle, selectUser, user, repoList }) {


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
                <button onClick={() => onChange(page - 1)} disabled={page === 1 ? true : false}>Previous</button>
                {page === 1 ? null : <button onClick={() => onChange(1)} disabled={page === 1 ? true : false} >1</button>}
                <button onClick={() => onChange(page)} disabled={true}>{page}</button>
                <button onClick={() => onChange(page + 1)} >{page + 1}</button>
                <button onClick={() => onChange(page + 2)} >{page + 2}</button>
                <button onClick={() => onChange(page + 3)} >{page + 3}</button>
                <button onClick={() => onChange(page + 4)} >{page + 4}</button>
                <button onClick={() => onChange(page + 1)} >Next</button>
                <Link to="/" className="btn-home">Home</Link>
            </div>
        </div >

    )
}
