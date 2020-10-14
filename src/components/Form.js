import React from "react";


const Form = (props) =>
 {
   //here I can write javascript code and functions
   const inputTextHandler = (e) =>
   {
     //console.log(e.target.value);
     props.setInputText(e.target.value);
   }
   const submitTodoHandler = (e) =>
   {
     e.preventDefault();
     props.setTodos([
      ...props.todos,
       {text: props.inputText, completed: false, id: Math.random() * 1000}

     ]);
     props.setInputText('');
   }

   const doneHandler = (e) =>
   {
      props.setIsDone(e.target.value);
   }

    return(
        <form>
            <input value={props.inputText} onChange={inputTextHandler} 
            type = "text" className = "todo-input" />
            <button onClick={submitTodoHandler} className = "todo-button" type ="submit">
              <i className = "fas fa-plus-square"></i>
            </button>
            <div className="select">
              <select onChange={doneHandler} name = "todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
            </div>
        </form>
    );//end return
}


export default Form;