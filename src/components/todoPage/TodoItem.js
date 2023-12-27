import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import ModalButton from "../common/ModalButton";
import TodoForm from "../common/TodoForm";
import "./Todo.css";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [done, setDone] = useState(false);
  const handleCheckButton = () => {
    setDone(!done);
  };

  return (
    <div>
      <div className=" flex justify-between items-center shadow-md bg-blue-200 border-blue-400 px-4 p-3 m-4 rounded-lg">
        <div className="">
          <input
            type="checkbox"
            className="mr-2 cursor-pointer"
            checked={done}
            onChange={handleCheckButton}
          />
          <span
            className={`${!done ? "text-blue-800" : "text-green-800"
              } text-xl font-medium capitalize`}
          >
            {todo.text}{" "}
            {!done ? (
              ""
            ) : (
              <FaCheckCircle className="inline-block ml-2 text-lg" />
            )}
          </span>
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
