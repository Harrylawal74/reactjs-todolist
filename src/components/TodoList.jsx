 
// eslint-disable-next-line no-unused-vars
import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    ///props are passed from parent component Apps.jsx to TodoList.jsx
    ///destructures out todos from props
    const {todos} = props

    return (
    ///map is an array methond which takes each element and its index as an argument
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                //Renders TodoCard
                ///when mapping, parent element needs a unique key, todoIndex is unique for each todo
                /// mapping means {todo} is written once then each element in the array is output
                //the {todo} used in the code becomes a child of TodoCard and is destructed as 'children' in TodoCard.jsx 
                <TodoCard {...props} key={todoIndex} index={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
    )
}
