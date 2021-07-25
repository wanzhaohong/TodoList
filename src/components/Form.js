import React from 'react';
import nextId from "react-id-generator";

const Form = ({ todos, setTodos, setInputText, inputText, setStatus}) => {
    //function for the input text state.
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        
        setTodos([
            ...todos, { text: inputText, complete: false, id: nextId() }
        ]);

        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;