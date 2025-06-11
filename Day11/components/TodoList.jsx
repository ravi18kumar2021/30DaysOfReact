import './TodoList.css'
import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const pendingTodos = todos.filter(todo => !todo.completed);
    const completedTodos = todos.filter(todo => todo.completed);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        const taskValue = taskInput.trim();
        if (taskValue === '') {
            alert('Fill the task in the input field');
            return
        }
        const taskItem = { 'task': taskValue, 'completed': false };
        setTodos([...todos, taskItem]);
        setTaskInput('');
    }
    const toggleTodos = (indexOfTodo) => {
        const updatedTodos = [...todos];
        updatedTodos[indexOfTodo].completed = !updatedTodos[indexOfTodo].completed;
        setTodos(updatedTodos);
        console.log(updatedTodos);
    }
    const deleteTodo = (indexOfTodo) => {
        const updatedTodos = todos.filter((_, index) => index !== indexOfTodo);
        setTodos(updatedTodos);
    }
    const clearPendingTasks = () => {
        const updatedTodos = todos.filter(todo => todo.completed);
        setTodos(updatedTodos);
    }
    const clearCompletedTasks = () => {
        const updatedTodos = todos.filter(todo => !todo.completed);
        setTodos(updatedTodos);
    }
    return (
        <div>
            <div style={{
                width: "360px",
                margin: "20px auto"
            }}>
                <h1>ToDo List</h1>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <input type="text"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)} />
                    <button style={{
                        width: "100px",
                        background: "green"
                    }} onClick={addTask}>Add</button>
                </div>
            </div>
            <div style={{
                width: "900px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <div style={{
                    width: "45%"
                }}>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <h2>Pending Tasks</h2>
                        <button style={{ border: "2px solid white" }} onClick={() => clearPendingTasks()}>Clear</button>
                    </div>
                    <table style={{ width: "100%" }} border="1">
                        <thead>
                            <tr>
                                <th style={{ width: "20%" }}>Status</th>
                                <th>Task</th>
                                <th style={{ width: "30%" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pendingTodos.length > 0
                                    ?
                                    pendingTodos.map((item, index) => (
                                        <tr key={index}>
                                            <td><input type="checkbox" checked={item.completed} onChange={() => toggleTodos(todos.indexOf(item))} /></td>
                                            <td>{item.task}</td>
                                            <td><button style={{ background: "red" }} onClick={() => deleteTodo(todos.indexOf(item))}>Delete</button></td>
                                        </tr>
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="3">No Any Task Available</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <div style={{
                    width: "45%"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <h2>Completed Tasks</h2>
                        <button style={{ border: "2px solid white" }} onClick={() => clearCompletedTasks()}>Clear</button>
                    </div>
                    <table style={{ width: "100%" }} border="1">
                        <thead>
                            <tr>
                                <th style={{ width: "20%" }}>Status</th>
                                <th>Task</th>
                                <th style={{ width: "30%" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                completedTodos.length > 0
                                    ?
                                    completedTodos.map((item, index) => (
                                        <tr key={index}>
                                            <td><input type='checkbox' checked={item.completed} onChange={() => toggleTodos(todos.indexOf(item))} /></td>
                                            <td>{item.task}</td>
                                            <td><button style={{ background: "red" }} onClick={() => deleteTodo(todos.indexOf(item))}>Delete</button></td>
                                        </tr>
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="3">No Any Task Available</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default TodoList;