import React, {useState, useEffect} from "react";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {
  
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);//array of objects
  const [isDone, setIsDone] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //use effect
  useEffect( () =>
  {
    getLocalTodos();
  }, [])

  useEffect(() =>
  {
    filterHandler();
    saveLocalTodos();
  }, [todos, isDone])
  //end use effect
  const filterHandler = () =>
  {
    switch(isDone)
    {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed == false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //save to local
  const saveLocalTodos = () =>
  {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () =>
  {
    if(localStorage.getItem('todos') === null)
    {
      localStorage.setItem('todos', JSON.stringify([]));
    }else
    {
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form 
      inputText={inputText} setInputText={setInputText} 
      todos={todos} setTodos={setTodos} 
      isDone={isDone}
      setIsDone={setIsDone}
      />

      <TodoList 
      todos={todos}
      filteredTodos={filteredTodos} 
      setTodos={setTodos}
      isDone={isDone}
      />
    </div>
  );
}

export default App;
