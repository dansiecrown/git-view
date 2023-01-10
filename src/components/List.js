import React, { useState, useEffect } from 'react';
import { ViewProvider } from '.././ViewContext';
import ListItem from '../pages/ListItem';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

export default function List() {
    const [temp, setTemp] = useState("");


    const [list, setList] = useState([]); // list is the state variable, setList is the function to update the state variable
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [page, setPage] = useState(1); // Page state
    const [user, setUser] = useState('dansiecrown'); // User state

    async function fetchData() {
        try {
            setIsLoading(true)
            const response = await axios.get(`https://api.github.com/users/${user}/repos?page=${page}&per_page=100`);
            setList(response.data)
            setIsLoading(false)
            if (response.data.length === 0) {
                setPage(1)
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [page, user])


    const changePage = (x) => {

        setPage(x)
    }

    const changeHandle = (e) => {
        setTemp(e.target.value)
    }

    const selectUser = () => {
        if (temp === "") {
            setUser("dansiecrown")
        } else {

            setUser(temp)

        }
    }

    return (
        <div className="list">
            <div className="container">
                <ListItem
                    list={list}
                    page={page}
                    isLoading={isLoading}
                    className="column"
                    onChange={changePage}
                    changeHandle={changeHandle}
                    selectUser={selectUser}
                    user={user}

                />
            </div>

        </div>
    )
}
