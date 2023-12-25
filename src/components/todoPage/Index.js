import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { MdAddCircleOutline } from "react-icons/md";
import "./Todo.css";
import ModalButton from "../common/ModalButton";
import TodoForm from "../common/TodoForm";

const Index = () => {
  const [todos, setTodos] = useState([]);
  // const [time, setTime] = useState(day);

  const getData = () => {
    let data = sessionStorage.getItem("myPlans");
    data = JSON.parse(data);
    if (data !== null) {
      setTodos(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos?.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
    const sessionalData = JSON.stringify(updatedTodos);
    sessionStorage.setItem("myPlans", sessionalData);
  };

  const handleEditTodo = (id, newText) => {
    const updatedTodos = todos?.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    const sessionalData = JSON.stringify(updatedTodos);
    sessionStorage.setItem("myPlans", sessionalData);
    getData();
  };

  return (
    <>
      <div className="flex flex-col items-center mt-6 w-[95%] md:w-[80%] lg:w-[60%] mx-auto">
        <h2 className="primary-heading my-3 text-black">Daily Work Planner</h2>
        <div className="flex flex-col-reverse md:flex-row items-center">
          <h2 className="secondary-heading mt-6 md:mr-4 md:mt-0">
            Add your first Todo! <span className="relative bottom-[6px]">👉🏻</span>
          </h2>

          <ModalButton
            Button={({ toggleModal }) => {
              return (
                <MdAddCircleOutline
                  className="cursor-pointer text-[50px] hover:text-gray-600"
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
                    todos={todos}
                    setTodos={setTodos}
                  />
                </>
              );
            }}
          />
        </div>
        <div className="list">
          <TodoList
            todos={todos}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
