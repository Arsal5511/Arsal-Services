import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import ModalButton from "../common/ModalButton";
import TodoForm from "../common/TodoForm";
import dayjs from "dayjs";


const TodoItem = ({ color, todo, onDelete, onEdit }) => {
  const [done, setDone] = useState(todo.checked);
  const handleCheckButton = () => {
    let updCheckbox = !done
    setDone(updCheckbox);
    onEdit(todo.id, { checked: updCheckbox })
  };
  const myDate = dayjs(todo.date);
  const Date = myDate.format('MMMM DD, YYYY')
  // const myColor = "bg-[" + color + "]"
  return (
    <div>
      <div style={{ background: color }} className={`flex justify-between items-center shadow-md p-3 my-4 rounded-lg`}>
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            className="mr-1 cursor-pointer my-1"
            checked={done}
            onChange={handleCheckButton}
          />
          <div className="flex flex-col">

            <h2
              className={`${done ? "text-green-800" : "text-blue-800"
                } text-xl font-medium capitalize`}
            >
              {todo.text}{" "}
              {done ? (
                <FaCheckCircle className="inline-block ml-1 text-lg" />
              ) : (
                ""
              )}
            </h2>
            <h5 className="text-sm text-gray-600">
              {Date}
            </h5>
          </div>
        </div>
        <div className="flex flex-nowrap">
          <ModalButton
            Button={({ toggleModal }) => {
              return (
                <AiOutlineForm
                  className="text-xl ml-3 cursor-pointer hover:text-[#163c90]"
                  onClick={() => {
                    toggleModal();
                  }}
                />
              );
            }}
            title={"Add your Plan Todo"}
            Content={({ toggleModal }) => {
              return (
                <>
                  <TodoForm
                    toggleModal={toggleModal}
                    todo={todo}
                    onEdit={onEdit}
                    target={"update"}
                  />
                </>
              );
            }}
          />

          <ModalButton
            Button={({ toggleModal }) => {
              return (
                <AiOutlineDelete
                  className="text-xl ml-3 cursor-pointer hover:text-[#163c90]"
                  onClick={() => {
                    toggleModal();
                  }}
                />
              );
            }}
            title={"Are you sure?"}
            Content={({ toggleModal }) => {
              return (
                <>
                  <div className="flex mx-2 justify-end">
                    <button
                      onClick={() => {
                        toggleModal();
                      }}
                      className="white-button"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => onDelete(todo.id)}
                      className="blue-button"
                    >
                      Delete
                    </button>
                  </div>
                </>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
