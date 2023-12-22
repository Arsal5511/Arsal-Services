import React, { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";
import { LuSave } from "react-icons/lu";
import './Todo.css'




const TodoItem = ({ todo, onDelete, onEdit }) => {
    const [done, setDone] = useState(false);
    const handleCheckButton = () => {
        setDone(!done);
    };

    const [editedText, setEditedText] = useState(todo.text);
    const [isEditing, setIsEditing] = useState(false);



    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    }
    const handleSave = () => {
        setIsEditing(false);
        onEdit(todo.id, editedText);
    };

    const handleEnter = (button) => {
        if (button.key === "Enter") {
            handleSave();
        }
    };

    return (

        <div>
            {isEditing ? (
                <div className='todo-item'>
                    <div className='textWrapper'>
                        <input
                            ref={(input) => { input?.focus(); }}
                            className='edit_todo'
                            onKeyDown={handleEnter}
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                        />
                    </div>
                    <div className="buttons">
                        <LuSave onClick={handleSave} />
                        <AiOutlineDelete onClick={() => onDelete(todo.id)} />
                    </div>
                </div>
            ) : (
                <div className='todo-item'>
                    <div className='textWrapper'>
                        <input type="checkbox"
                            className='checkBox'
                            checked={done}
                            onChange={handleCheckButton}
                        />
                        <span className={`${done ? 'redColor' : 'blueColor'} todo_text `} >{todo.text}</span>
                    </div>
                    <div className="buttons">
                        <AiOutlineForm onClick={handleEditToggle} />
                        <AiOutlineDelete onClick={() => onDelete(todo.id)} />
                    </div>
                </div>

            )
            }

        </div >
    )
}

export default TodoItem