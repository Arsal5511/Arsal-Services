import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    const { todos, onDelete, onEdit } = props
    return (
        <div className='todo_list'>
            {
                todos.length === 0 ?
                <img className='w-[170px] mx-auto opacity-30' alt='Image_placeholder' src="images/todo-page/no_data.png" />
                :
                todos?.map((todo) => (
                    <TodoItem todo-item key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
                ))

            }
        </div>
    )
}

export default TodoList