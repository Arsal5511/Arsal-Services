import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { MdAddCircleOutline } from "react-icons/md";
import "./Todo.css";
import ModalButton from "../common/ModalButton";
import TodoForm from "../common/TodoForm";

// import * as dayjs from 'dayjs';
// var d = new Date(2018, 8, 18)
// var day = dayjs(d)
// console.log(dayjs())
// dayjs().second(30).valueOf()
// console.log(dayjs().second())
// dayjs().hour()
// console.log(dayjs().hour(12))
// let time = dayjs();
// console.log(dayjs().set('date', 23))
// console.log(dayjs().set('month', 1) // April
// )
// console.log(dayjs().set('year', 2024)
// )
// console.log(dayjs().set('D', 24).set('M', 11).set('y', 2023))

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
    setTodos(updatedTodos);
    const sessionalData = JSON.stringify(updatedTodos);
    sessionStorage.setItem("myPlans", sessionalData);
  };

  return (
    <>
      <div id="todo_section">
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
