import { useState } from "react"
import TodoInput from "./components/Todoinput"
import TodoList from "./components/TodoList"

function App() {
  ///multiple components need access to todos list therefore todos list must be defined in the parent component Apps.jsx
  /// todos is the array name. setTodos is a setter function used to update the value of the array
  ///the array is a useState becuase it is dynamic and can change value
  const [todos, setTodos] = useState([
    'Go to the gym',
    'Do wednesday shopping',
    'Buy groceries'])

  ///takes newTodo as a parameter then creates a new array called newTodoList which concatinates the new item to the old list
  ///setTodos function takes newTodoList as a parameter and updates the todos array
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    ///give other components access to variables defined in Apps.jsx
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
