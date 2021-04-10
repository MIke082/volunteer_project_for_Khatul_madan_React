import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import './List.css';
const List = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`https://sclub.in.ua/actions/all/page/0/100`)
        .then(response => response.json())
        .then(json => setTodos(json))
    }, [])

    console.log(todos);
    return (
            <div className="main-div">
                 {todos.entities && !!todos.entities.length 
                    && todos.entities.map((item, index) => <Card item={item} key={index} />)}
            </div>
    );
};

export default List;