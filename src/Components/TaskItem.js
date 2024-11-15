import React from 'react';

const TaskItem = ({ task, deleteTask, updateTask }) => {
    const toggleComplete = () => updateTask({ ...task, completed: !task.completed });

    return (
        <div className={`p-4 border rounded-lg ${task.completed ? 'bg-green-100' : 'bg-white'} shadow-sm`}>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
            <p className="text-sm text-gray-500">Due Date: {task.dueDate}</p>
            <p className={`text-sm ${task.priority === "High" ? "text-red-500" : task.priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}>
                Priority: {task.priority}
            </p>
            <div className="mt-2 flex space-x-2">
                <button
                    onClick={toggleComplete}
                    className="px-3 py-1 text-white bg-green-500 rounded-md"
                >
                    {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button
                    onClick={() => deleteTask(task.id)}
                    className="px-3 py-1 text-white bg-red-500 rounded-md"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
