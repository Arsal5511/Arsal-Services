import React, { useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import ModalButton from "../common/ModalButton";
import TodoForm from "../common/TodoForm";
import Tabs from "./Tabs";
import { FcTodoList } from "react-icons/fc";


const Index = () => {
  const [todos, setTodos] = useState([]);

  const getData = () => {
    let data = localStorage.getItem("myPlans");
    data = JSON.parse(data);
    if (data !== null) {
      setTodos(data || [])
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
    localStorage.setItem("myPlans", sessionalData);
  };

  const handleEditTodo = (id, updatedData) => {
    const updatedTodos = todos?.map((todo) =>
      todo.id === id ? { ...todo, ...updatedData } : todo
    );
    const localData = JSON.stringify(updatedTodos);
    localStorage.setItem("myPlans", localData);
    getData();
  };
  return (
    <>
      <div className="flex flex-col items-center min-h-[85vh] mt-[120px] w-[95%] md:w-[80%] lg:w-[60%] mx-auto ">
        <FcTodoList className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px]" />
        <h2 className="primary-heading  text-center my-3 text-black">Daily Work Planner</h2>
        <div className="flex flex-col-reverse md:flex-row items-center">
          <h2 className="secondary-heading mt-6 md:mr-4 md:mt-0">
            Add your first Todo! <span className="relative bottom-[6px] hidden md:inline ">👉🏻</span>
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
        <div className="w-[95%] md:w-[70%]">
          <Tabs
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
