import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const todoContext = createContext([]);

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [updateTodo, setUpdateTodo] = useState([]);
    const [deleteTodo, setDeleteTodo] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/todos")
            .then((res) => {
                setTodos(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [updateTodo, deleteTodo]);

    const addNewTodo = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:4000/api/todos", {
                todo: event.target.newTodo.value,
            })
            .then((res) => {
                // console.log(JSON.parse(res.config.data));
                // console.log(res);
                setTodos(res.data);
                toast("New Todo Created...");
                event.target.newTodo.value = "";
            })
            .catch((err) => {
                console.error(err.response);
            });
    };

    const handleUpdateTodo = (todoValue, id) => {
        // event.preventDefault();
        // console.log("HandleUpdateTodo:", todoValue, id);
        const todo = todoValue.trim().length > 0 ? todoValue : "";
        if (todo) {
            axios
                .put(`http://localhost:4000/api/todos/${id}`, {
                    todo: todo,
                })
                .then((res) => {
                    console.log("Res:", res);
                    // console.log(JSON.parse(res.config.data));

                    setUpdateTodo({ id: id, todo: todo });
                    toast(`Todo Is Updated With ID: ${id}`);
                })
                .catch((err) => {
                    console.error(err.response);
                });
        }
    };

    const handleDeleteTodo = (id) => {
        axios
            .delete(`http://localhost:4000/api/todos/${id}`)
            .then((res) => {
                console.log(res);

                setDeleteTodo(id);
                toast(`Todo Deleted With ID: ${id}`);
                // console.log(deleteTodo);
                // console.log("After Setting DeleteTodo:", id);
            })
            .catch((err) => {
                console.error(err.response);
            });
    };

    return (
        <todoContext.Provider
            value={{ todos, addNewTodo, handleUpdateTodo, handleDeleteTodo }}
        >
            {children}
        </todoContext.Provider>
    );
};

export default TodoProvider;
