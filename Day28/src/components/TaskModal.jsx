import { useEffect, useState } from "react"

export default function TaskModal({ tasks, setTasks, error, setError, hideModal, setHideModal, editingTask, setEditingTask, taskToDelete, setTaskToDelete }) {
    const [editInput, setEditInput] = useState(editingTask?.task || '');
    const [editStatus, setEditStatus] = useState(editingTask?.completed || false);
    const handleError = () => {
        setError('');
        setHideModal(true);
    }
    const handleUpdate = () => {
        const updatedValue = editInput.trim();
        if (updatedValue === '') {
            setError('Task cannot be empty');
            setEditingTask(null);
            return
        }
        const updatedTasks = tasks.map(task => (
            task.id === editingTask.id
            ? {...task, task: updatedValue, completed: editStatus}
            : task
        ))
        setTasks(updatedTasks);
        setEditingTask(null);
    }
    const handleDelete = (indexToDelete) => {
        const updatedTasks = tasks.filter(task => task.id !== indexToDelete);
        setTasks(updatedTasks);
        setTaskToDelete(null);
    }
    useEffect(() => {
        if (editingTask) {
            setEditInput(editingTask.task);
        }
    }, [editingTask]);
    return (
        <>
            {(error || editingTask || taskToDelete) && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                    {error && (
                        <div className="bg-blue-900 rounded-md border-3 border-red-400 w-md mx-auto text-center py-6">
                            <h3 className="text-2xl mb-6">{error}</h3>
                            <button className="bg-red-600 px-4 py-1 mx-2" onClick={handleError}>OK</button>
                        </div>
                    )}
                    {taskToDelete && (
                        <div className="bg-blue-900 rounded-md border-3 border-red-400 w-md mx-auto text-center py-6">
                            <h3 className="text-2xl mb-6">Are you sure to delete this task ?</h3>
                            <p className="text-yellow-200 text-lg font-bold mb-6">{taskToDelete.task}</p>
                            <button className="bg-red-600 px-4 py-1 mx-2"
                            onClick={() => handleDelete(taskToDelete.id)}
                            >Delete</button>
                            <button className="bg-gray-400 text-gray-800 px-4 py-1 mx-2"
                            onClick={() => setTaskToDelete(null)}
                            >Cancel</button>
                        </div>
                    )}
                    {editingTask && (
                        <div className="bg-blue-900 rounded-md border-3 border-red-400 w-md mx-auto text-center flex flex-col gap-6 py-6">
                            <h3 className="text-2xl">Edit Task</h3>
                            <div className="grid grid-cols-5 m-4 gap-4 items-center">
                                <p className="text-lg italic text-right col-span-2">Current Task :</p>
                                <input type="text" value={editInput} className="border-1 text-lg rounded-sm p-1 col-span-3" onChange={(e) => setEditInput(e.target.value)}/>
                                <p className="text-lg italic text-right col-span-2">Current Status :</p>
                                <div className="flex items-center col-span-3">
                                    <input type="checkbox" className="size-4" onChange={(e) => setEditStatus(e.target.checked)} checked={editStatus}/>
                                    <p className="mx-4">{editStatus?"Completed":"Pending"}</p>
                                </div>
                            </div>
                            <div>
                                <button className="bg-orange-400 px-4 py-1 mx-2" onClick={handleUpdate}>Update</button>
                                <button className="bg-red-600 px-4 py-1 mx-2" onClick={() => setEditingTask(null)}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}