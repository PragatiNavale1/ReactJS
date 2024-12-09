import React from "react";

function TodoList({todos}) {
    return (
        <div>
            <h2>
                <ul>
                    {todos.map((todo,index) => (<li key={index}> {todo} </li>))}
                </ul>
            </h2>
        </div>
    )
}
export default TodoList;