import { useState } from "react"

export default function TodoInput(props) {
    //functions 'handleAddTodos', 'todoValue' and 'setTodoValue' are passed from parent component Apps.jsx to TodoInput.jsx as props
    //destructures out 'handleAddTodos', 'todoValue' and 'setTodoValue' from props
    const {handleAddTodos, todoValue, setTodoValue} = props

    

    return (
        //as the value of the input changes (event listener) the setTodoValue is called which updates the value of todoValue
        //when the button is pressed the handleAddTodos function (defined in Apps.jsx) is called with the current todoValue as a param followed by setTodoValue('') which resets todoValue
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." />
            
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
            
        </header>
    )
}