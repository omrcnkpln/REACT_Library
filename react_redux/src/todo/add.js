import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { addTodo } from "../stores/todo";
import { addTodoHandle } from "../utils";

export default function AddTodo() {

    const { user } = useSelector(state => state.auth);
    const [todo, setTodo] = useState("");

    const submitHandle = e => {
        e.preventDefault();

        addTodoHandle({
            id: nanoid(),
            user: user.id,
            title: todo,
            done: false,
        });

        setTodo("");
    }

    return (
        <form onSubmit={submitHandle}>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
            <button disabled={!todo || !user} type="submit">Ekle</button>
        </form>
    )
}