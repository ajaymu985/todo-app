import { useState } from "react"

export default function Todoinput(props) {
    const {handleAddTodos, todovalue, setTodoValue} = props
    
    return (
        <header>
            <input value={todovalue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} type="Enter todo..." />
            <button onClick={() => {
                handleAddTodos(todovalue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}