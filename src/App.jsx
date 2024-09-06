import { useState, useEffect } from "react"
import Todoinput from "./Todoinput"
import TodoList from "./TodoList"

function App() {
  

  const [todos, setTodos] = useState([])
  const [todovalue, setTodoValue] = useState('')

  function persistData(NewList) {
    localStorage.setItem('todos', JSON.stringify({ todos: NewList }))
  }
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
    
  function handleEditTodo(index){
    const valuteToBeEdited = todos[index]
    setTodoValue(valuteToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <>
        <Todoinput handleAddTodos={handleAddTodos} todovalue={todovalue} setTodoValue={setTodoValue}/>
        <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos} />
      </>
    </>
  )
}

export default App
