"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "@/app/component/Navbar";

type Todo = {
    id: number;
    username: string;
    title: string;
    completed: boolean;
};

const TodosPage = () => {
    const { username } = useParams(); // Extract username from the URL
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>("");
    const [page, setPage] = useState(1); // New state for pagination
    const [loading, setLoading] = useState(true); // Loading state
    const [hasMore, setHasMore] = useState(true); // Track if more todos are available

    // Fetch todos when the component mounts or page changes
    useEffect(() => {
        const fetchTodos = async () => {
            if (!hasMore) return; // Don't fetch if no more todos are available

            try {
                const res = await fetch(`http://localhost:8000/todos?username=${username}&_page=${page}&_limit=10`);
                const data = await res.json();

                // If no data is returned, set hasMore to false
                if (data.length === 0) {
                    setHasMore(false);
                } else {
                    setTodos((prev) => [...prev, ...data]); // Append new todos
                }

                setLoading(false);
            } catch (error) {
                toast.error("Error fetching todos.");
                setLoading(false);
            }
        };

        fetchTodos();
    }, [username, page]);

    // Add a new todo
    const addTodo = () => {
        const todo = {
            username, // Use the username for todos
            title: newTodo,
            completed: false,
        };

        fetch("http://localhost:8000/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        })
            .then((response) => response.json())
            .then((data) => {
                setTodos([...todos, data]); // Add the new todo to the existing list
                toast.success("Todo added successfully!");
                setNewTodo(""); // Reset the new todo input field
            })
            .catch((error) => toast.error("Error adding todo: " + error));
    };

    // Update a todo based on id
    const updateTodo = (todoId: number, updatedTodo: Partial<Todo>) => {
        fetch(`http://localhost:8000/todos/${todoId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTodo),
        })
            .then(() => {
                setTodos(
                    todos.map((todo) =>
                        todo.id === todoId ? { ...todo, ...updatedTodo } : todo
                    )
                );
                toast.success("Todo updated successfully!");
            })
            .catch((error) => toast.error("Error updating todo: " + error));
    };

    // Delete a todo based on id
    const deleteTodo = (todoId: number) => {
        fetch(`http://localhost:8000/todos/${todoId}`, {
            method: "DELETE",
        })
            .then(() => {
                setTodos(todos.filter((todo) => todo.id !== todoId));
                toast.success("Todo deleted successfully!");
            })
            .catch((error) => toast.error("Error deleting todo: " + error));
    };

    // Calculate dashboard statistics
    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const pendingTodos = totalTodos - completedTodos;

    // Handle infinite scrolling
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            if (!loading && hasMore) { // Fetch more todos if not loading and more todos are available
                setLoading(true);
                setPage((prev) => prev + 1);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, hasMore]); // Include loading and hasMore in dependencies

    return (
        <div className="bg-black min-h-screen">
            <div>
                <Navbar loginText="Log out" signupText="Todos" />
            </div>

            <div className="p-4">
                {/* Dashboard Section */}
                <div className="mb-8 bg-gray-950 p-6 rounded shadow-lg">
                    <h2 className="text-xl font-bold mb-4 text-orange-600">Dashboard</h2>
                    <div className="flex justify-between">
                        <div className="bg-blue-500 text-white p-4 rounded w-1/3">
                            <h3 className="text-lg font-semibold">Total Todos</h3>
                            <p className="text-2xl">{totalTodos}</p>
                        </div>
                        <div className="bg-green-500 text-white p-4 rounded w-1/3">
                            <h3 className="text-lg font-semibold">Completed Todos</h3>
                            <p className="text-2xl">{completedTodos}</p>
                        </div>
                        <div className="bg-red-500 text-white p-4 rounded w-1/3">
                            <h3 className="text-lg font-semibold">Pending Todos</h3>
                            <p className="text-2xl">{pendingTodos}</p>
                        </div>
                    </div>
                </div>

                {/* Add Todo Section */}
                <div className="mb-4 bg-gray-950 p-6 rounded shadow-lg text-white">
                    <h2 className="text-xl font-bold mb-4">Todos for {username}</h2>
                    <div className="mb-4 text-xl">
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            placeholder="Add a new todo"
                            className="border p-2 mr-2 rounded text-black"
                        />
                        <button
                            onClick={addTodo}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Add Todo
                        </button>
                    </div>

                    {/* Todo List */}
                    <ul>
                        {todos.map((todo) => (
                            <li
                                key={todo.id}
                                className="mb-2 flex justify-between items-center"
                            >
                                <span
                                    className={`${todo.completed
                                        ? "line-through text-gray-500"
                                        : ""
                                        }`}
                                >
                                    {todo.title}
                                </span>
                                <div>
                                    <button
                                        onClick={() =>
                                            updateTodo(todo.id, {
                                                completed: !todo.completed,
                                            })
                                        }
                                        className="mr-2 px-4 py-1 bg-green-500 text-white rounded"
                                    >
                                        {todo.completed ? "Undo" : "Complete"}
                                    </button>
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className="px-4 py-1 bg-red-500 text-white rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {loading && <div className="text-white">Loading more todos...</div>} {/* Loading indicator */}
                </div>
            </div>
        </div>
    );
};

export default TodosPage;
