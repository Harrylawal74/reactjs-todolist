// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function TodoCard(props) {
    //props are passed to TodoInput.jsx
    //destructures out children from props
    //children are defined in TodoList.jsx inside the TodoCard render 
    const {children} = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash"></i>
            </div>
        </li>
  )
}
