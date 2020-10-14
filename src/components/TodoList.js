import React from 'react'
//import components
import Todo from './Todo'

const TodoList = (props) =>
{

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map( (todo) =>
                (   
                    <Todo 
                        todoText={todo['text']} 
                        key={todo.id} 
                        setTodos={props.setTodos}
                        todos={props.todos}
                        todo={todo}
                    />
                ) )}
            </ul>
        </div>
    );
}

export default TodoList;