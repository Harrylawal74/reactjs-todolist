// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function TodoCard(props) {
    //functions 'handleDeleteTodo', 'index' and 'handleEditTodo' are passed from parent component Apps.jsx through TodoList.jsx to TodoCard.jsx as props
    //destructures out 'handleDeleteTodo', 'index' and 'handleEditTodo' from props
    //children are defined in TodoList.jsx inside the TodoCard render (any js used inside the jsx code)
    //destructures out children and handleDeleteTodo from props
    const {children, handleDeleteTodo, index, handleEditTodo} = props
    return (
        // delete and edit buttons
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleEditTodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>

                <button onClick={() => 
                    handleDeleteTodo(index)
                }>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
  )
}
