import React from 'react'

import TodoItem from './TodoItem';
import Header from './Header';
import Footer from './Footer';

function Todolist(props) {
    const { title, items, addNew } = props;
    const count = items.lenght;
    return (
        <div className="todolist">
            <h1><Header title={title} addNew={addNew} /></h1>
            <ul className="list-unstyled">
                {items.map(i => <TodoItem key={i.id} data={i} />)}
            </ul>
            <Footer count={count} />
        </div>
    );
}

export default Todolist;