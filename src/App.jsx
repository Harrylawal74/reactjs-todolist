import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  ///multiple components need access to todos list therefore todos list must be defined in the parent component Apps.jsx (anything that needs to be accessed in multiple components should be defined in the root component App.jsx in this example )
  /// todos is the array name. setTodos is a setter function used to update the value of the array
  ///the array is a useState becuase it is dynamic and can change value
  const [todos, setTodos] = useState([])

  //todoValue is a the identifier of the string, setTodoValue is a setter function used to update the value of the string
  //the string is a useState becuase it is dynamic and can change value
  const [todoValue, setTodoValue] = useState('')

  //creates an item in localStorage with the key 'todos' (this is the todo list)
  //takes newList as a param
  //replaces the list stored in localStorage with the newlist
  //this function should be called each time the list is updated (deleted from or added to. Does not need do be done for editing a list item becuase the add function is used within the edit function)
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos:
      newList
    }))
  }

  ///takes newTodo as a parameter then creates a new array called newTodoList which concatinates the new item to the old list
  //the ...todos notation speads out the values in the array
  ///setTodos function takes newTodoList as a parameter and updates the todos array
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]

    //persistData() function being called to update the todos list in localStorage
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  //if the todoIndex is not equal to the index then it stays in the array otherwise it is removed
  //if filter(true) then the element is included in the array
  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index 
    })

    //persistData() function being called to update the todos list in localStorage
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  //takes the index of the todo as a param as it is always unique
  //finds the indexed todo in todos
  //uses the setTodoValue function to change the value of the input bar to the value to be edited (makes use of TodoInput.jsx)
  //deletes the todo from the list as it is now being edited
  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }


useEffect(() => {
  //checks whether local storage exists, if it doesn't then returns out
  if (!localStorage) {
    return 
  }

  //checks whether todos exists in local storage, if it doesn't then returns out
  let localTodos = localStorage.getItem('todos')
  if (!localTodos){
    return
  }

  //if todos exists in local storage then the value is pasrsed to the setTodos() function
  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)
  
  //square brackets are empty therefore the 'useEffect' react hook is triggered when the page is refreshed 
}, [])

  return (
    ///give other components access to variables defined in Apps.jsx
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
