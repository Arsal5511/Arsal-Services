import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import { MdAddCircleOutline } from "react-icons/md";
import './Todo.css';


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
  const [inputText, setInputText] = useState('');
  const getData = () => {
    let data = sessionStorage.getItem('myPlans');
    data = JSON.parse(data)
    if (data !== null) {
      setTodos(data)
    }
  }
  useEffect(() => {
    getData();
  }, [])

  const addData = () => {
    if (inputText.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputText,
      };
      const updData = [...todos, newTodo]
      setTodos(updData);
      console.log(updData, "todo")
      const sessionalData = JSON.stringify(updData)
      sessionStorage.setItem('myPlans', sessionalData);
      setInputText('');
    }
  }
  const handleEnter = (button) => {
    if (button.key === "Enter") {
      addData();
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos?.filter((todo) => { return todo.id !== id });
    setTodos(updatedTodos);
    const sessionalData = JSON.stringify(updatedTodos)
    sessionStorage.setItem('myPlans', sessionalData);
  };

  const handleEditTodo = (id, newText) => {
    const updatedTodos = todos?.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    const sessionalData = JSON.stringify(updatedTodos)
    sessionStorage.setItem('myPlans', sessionalData);
  };

  return (
    <div id='todo_section'>
      <h2 className='main_heading'>Daily Work Planner</h2>
      <div className='input_section'>
        <input
          className='text_input'
          onKeyDown={handleEnter}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder='Whats your plan today?'
        />
        {/* <input className='time_input' type="datetime-local" value={time} /> */}
        <MdAddCircleOutline onClick={addData} />
      </div>
      <div className="list">
        <TodoList todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
      </div>
    </div>
  )
}

export default Index
