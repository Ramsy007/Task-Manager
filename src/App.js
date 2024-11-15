import React, { useState, useEffect } from 'react';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [priorityFilter, setPriorityFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredSearchTerm, setFilteredSearchTerm] = useState("");
    const [taskToEdit, setTaskToEdit] = useState(null);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    };

    // Mark a task as complete
    const markComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: true } : task
        ));
    };

    // Filter tasks based on priority and search term
    const filteredTasks = tasks.filter(task => {
        const matchesPriority = priorityFilter === "All" || task.priority === priorityFilter;
        const matchesSearch = task.title.toLowerCase().includes(filteredSearchTerm.toLowerCase());
        return matchesPriority && matchesSearch;
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingTasks = filteredTasks.filter(
        task => new Date(task.dueDate) > today && !task.completed
    );
    const overdueTasks = filteredTasks.filter(
        task => new Date(task.dueDate) < today && !task.completed
    );
    const completedTasks = filteredTasks.filter(task => task.completed);

    const handleSearch = () => {
        setFilteredSearchTerm(searchTerm);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <TaskForm
                    addTask={addTask}
                    updateTask={updateTask}
                    taskToEdit={taskToEdit}
                    setTaskToEdit={setTaskToEdit}
                />

                <div className="flex flex-col md:flex-row items-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex items-center">
                        <label htmlFor="priority-filter" className="mr-3 text-lg font-semibold">Filter by Priority:</label>
                        <select
                            id="priority-filter"
                            value={priorityFilter}
                            onChange={(e) => setPriorityFilter(e.target.value)}
                            className="border border-gray-300 rounded-md p-2 text-gray-600 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="All">All</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>

                    <div className="flex items-center">
                        <label htmlFor="search" className="mr-3 text-lg font-semibold">Search Tasks:</label>
                        <input
                            type="text"
                            id="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by task name"
                            className="border border-gray-300 rounded-l-md p-2 text-gray-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-blue-500 text-white px-4 py-2 rounded-r-md font-semibold hover:bg-blue-600"
                        >
                            Search
                        </button>
                    </div>
                </div>

                <div className="flex space-x-4 mt-8">
                    <div className="w-1/3">
                        <h2 className="text-2xl font-bold text-blue-600 mb-4">Upcoming Tasks</h2>
                        <TaskList tasks={upcomingTasks} deleteTask={deleteTask} setTaskToEdit={setTaskToEdit} markComplete={markComplete} />
                    </div>

                    <div className="w-1/3">
                        <h2 className="text-2xl font-bold text-red-600 mb-4">Overdue Tasks</h2>
                        <TaskList tasks={overdueTasks} deleteTask={deleteTask} setTaskToEdit={setTaskToEdit} markComplete={markComplete} />
                    </div>

                    <div className="w-1/3">
                        <h2 className="text-2xl font-bold text-green-600 mb-4">Completed Tasks</h2>
                        <TaskList tasks={completedTasks} deleteTask={deleteTask} setTaskToEdit={setTaskToEdit} markComplete={markComplete} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
