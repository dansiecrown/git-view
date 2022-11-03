import React, { useState, useEffect } from 'react';
import { ViewProvider } from '.././ViewContext';
import ListItem from '../pages/ListItem';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

export default function List() {


    const [list, setList] = useState([]); // list is the state variable, setList is the function to update the state variable
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [page, setPage] = useState(1); // Page state
    const [user, setUser] = useState('dansiecrown'); // User state


    async function fetchData() {
        try {
            setIsLoading(true)
            const response = await axios.get(`https://api.github.com/users/${user}/repos?page=${page}&per_page=6`);
            setList(response.data)
            setIsLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [page])


    const changePage = (x) => {

        setPage(x)
    }
    return (
        <div className="list">
            <div className="container">
                <ListItem list={list} page={page} isLoading={isLoading} className="column" onChange={changePage} />
            </div>

        </div>
    )
}
