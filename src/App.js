import React, {useState, useEffect} from 'react';
import './App.css';
//import component.
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  //USESTATE STUFF 
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  //USEEFFECT STUFF
  useEffect(() => {
    getTodosLocal();
  }, []);

  useEffect(() =>{
    filterHandler();
    saveTodosLocal();
  }, [todos, status]);

  //run this useeffect only once when the application runs.

  //Functions event for filtering todos
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter(todo => todo.complete === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter(todo => todo.complete === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  }

  //SAVE TODOS TO LOCAL
  const saveTodosLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getTodosLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localtodos = JSON.parse(localStorage.getItem("todos"));
      //let localtodos = localStorage.getItem("todos", JSON.stringify(todos));
      setTodos(localtodos);
      // console.log(localtodos);
    }
  }

  return (
    
    <div className="App">
      <header>
        <h1>Bill's Todo List</h1>
      </header>
      <Form   
        todos={todos} 
        setTodos={setTodos} 

        setInputText={setInputText} 
        inputText={inputText}

        setStatus={setStatus}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos}

        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
