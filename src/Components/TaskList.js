import React from 'react';

function TaskList({ tasks, deleteTask, setTaskToEdit, markComplete }) {
    return (
        <div className="space-y-4">
            {tasks.map(task => (
                <div key={task.id} className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p>{task.description}</p>
                    <p className="text-sm text-gray-500">Priority: {task.priority}</p>
                    <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                    <div className="flex justify-between items-center mt-4">
                        {/* Mark Complete Button */}
                        {!task.completed && (
                            <button
                                onClick={() => markComplete(task.id)}
                                className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
                            >
                                Mark Complete
                            </button>
                        )}
                        <button
                            onClick={() => setTaskToEdit(task)}
                            className="bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-600"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
