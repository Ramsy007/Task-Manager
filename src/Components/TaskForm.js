import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, updateTask, taskToEdit, setTaskToEdit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Low");
    const [dueDate, setDueDate] = useState("");

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setPriority(taskToEdit.priority);
            setDueDate(taskToEdit.dueDate);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description && dueDate) {
            const task = { title, description, priority, dueDate, completed: false };
            if (taskToEdit) {
                updateTask({ ...taskToEdit, ...task }); // Update the task if editing
                setTaskToEdit(null); // Reset the taskToEdit after updating
            } else {
                addTask(task); // Add a new task if not editing
            }
            setTitle("");
            setDescription("");
            setPriority("Low");
            setDueDate("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">{taskToEdit ? "Edit Task" : "Add New Task"}</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
                required
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
                required
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
            >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md font-semibold">
                {taskToEdit ? "Update Task" : "Add Task"}
            </button>
        </form>
    );
}

export default TaskForm;
