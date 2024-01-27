import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import { TodoForm, TodoItem } from "./components";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodo((prev) =>
      prev.map((preTodo) => (preTodo.id === id ? todo : preTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((preTodo) =>
        preTodo.id === id
          ? { ...preTodo, completed: !preTodo.completed }
          : preTodo
      )
    );
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
        try {
            const parsedTodos = JSON.parse(storedTodos);
            setTodo(parsedTodos);
        } catch (error) {
            console.error("Error parsing todos from localStorage:", error);
        }
    }
}, []);

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842]  py-8"  style={{ minHeight: `calc(100vh - 72px)` }}>
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </TodoProvider>
  );
}

export default App;
