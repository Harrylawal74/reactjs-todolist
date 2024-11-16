import { useState } from "react"

export default function TodoInput(props) {
    //props are passed from parent component Apps.jsx to TodoInput.jsx
    //destructures out handleAddTodos from props
    const {handleAddTodos} = props

    //todoValue is a the identifier of the string, setTodoValue is a setter function used to update the value of the string
    //the string is a useState becuase it is dynamic and can change value
    const [todoValue, setTodoValue] = useState('')

    return (
        //as the value of the input changes (event listener) the setTodoValue is called which updates the value of todoValue
        //when the button is pressed the handleAddTodos function (defined in Apps.jsx) is called follwed by setTodoValue('') which resets todoValue
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