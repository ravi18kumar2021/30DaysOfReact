import { useEffect, useState } from "react"
import TaskModal from "./TaskModal";

export default function TaskManager({theme, toggleTheme}) {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [hideModal, setHideModal] = useState(true);
    const [error, setError] = useState('');
    const [editingTask, setEditingTask] = useState(null);
    const [taskToDelete, setTaskToDelete] = useState(null);
    const addTask = () => {
        const taskValue = taskInput.trim();
        if (taskValue === '') {
            setError('Please fill out the input field');
            setHideModal(false);
            setTaskInput('');
            return
        }
        setTasks([...tasks, { id: Date.now(), task: taskValue, completed: false }]);
        setTaskInput('');
    }
    const deleteTask = (indexOfTask) => {
        const allTasks = tasks.filter((_, index) => index !== indexOfTask);
        setTasks(allTasks);
    }
    useEffect(() => {
        if (!hideModal || editingTask !== null || taskToDelete !== null) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    })
    return (
        <div className="w-3xl mx-auto py-10 relative">
            <button className="right-0 absolute px-4 py-1 bg-pink-300 text-gray-800 rounded-sm m-2" onClick={toggleTheme}>{theme === 'dark'? "Dark":"Light"}</button>
            <div className="bg-gray-800 border-3 border-gray-400 rounded-sm p-6 text-center">
                <h1 className="text-4xl text-yellow-300 my-6">Task Manager</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis amet accusamus at numquam necessitatibus aperiam quae doloremque neque dolor enim?</p>
                <div className="w-lg mx-auto my-6 flex justify-evenly items-center">
                    <p className="text-xl">Enter a Task :</p>
                    <input type="text" className="border-1 text-lg rounded-sm p-1"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                    <button className="text-xl bg-blue-300 text-gray-700 px-5 py-1 rounded-sm"
                        onClick={addTask}
                    >Add</button>
                </div>
            </div>
            <hr className={`my-6 ${theme === 'light' ? 'text-gray-500': ''}`} />
            <div>
                {tasks.length > 0
                    ?
                    <div className="grid grid-cols-2 gap-2">
                        {tasks.map((item, index) => (
                            <div key={index} className="bg-violet-900 p-3 rounded-md">
                                <h2 className="text-xl font-bold">{item.task}</h2>
                                <p>Created : {new Date(item.id).toLocaleDateString()} @ {new Date(item.id).toLocaleTimeString()}</p>
                                <p>Status : {item.completed ? "Completed" : "Pending"}</p>
                                <button className="bg-orange-400 px-4 py-1 my-1" onClick={() => setEditingTask(item)}>Edit</button>
                                <button className="bg-red-500 px-4 py-1 m-2"
                                    onClick={() => setTaskToDelete(item)}
                                >Delete</button>
                            </div>
                        ))}
                    </div>
                    :
                    <p className="text-center text-xl">No Task Available. Create a new!</p>
                }
            </div>
            {(!hideModal || editingTask !== null || taskToDelete !== null) && (
                <TaskModal error={error} setError={setError} hideModal={hideModal} setHideModal={setHideModal} editingTask={editingTask} setEditingTask={setEditingTask} tasks={tasks} setTasks={setTasks} taskToDelete={taskToDelete} setTaskToDelete={setTaskToDelete}/>
            )}
        </div>
    )
}