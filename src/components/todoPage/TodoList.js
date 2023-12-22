import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDelete, onEdit }) => {
    return (
        <div className='todo_list'>
            {todos?.map((todo) => (
                <TodoItem todo-item key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    )
}

export default TodoList