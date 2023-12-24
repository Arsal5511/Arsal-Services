import React, { useState } from "react";

const TodoForm = ({ toggleModal, todos, setTodos }) => {
  const [inputText, setInputText] = useState("");

  const addData = () => {
    if (inputText.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputText,
      };
      const updData = [...todos, newTodo];
      setTodos(updData);
      // console.log(updData, "todo");
      const sessionalData = JSON.stringify(updData);
      sessionStorage.setItem("myPlans", sessionalData);
      setInputText("");
    }
  };

  const handleEnter = (button) => {
    if (button.key === "Enter") {
      addData();
      toggleModal()
    }
  };

  const handleSave = () =>{
    addData();
    toggleModal();
  }
  return (
    <section>
      <div className="my-6">
        <label className="text-lg">
            Todo Task:
        </label>
        <input
        //   defaultValue={}
          onKeyDown={handleEnter}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          name="todoText"
          id="todoText"
          className="mt-2 block w-full rounded-md py-1.5 border-2 border-gray-400  px-2 text-gray-900 shadow-sm placeholder:text-gray-400 md:text-lg text-sm sm:leading-6"
        />
      </div>
      <div className="flex mx-2 justify-end">
        <button
          onClick={() => {
            toggleModal();
          }}
          className="red-button-rounded"
        >
          Cancel
        </button>
        <button onClick={handleSave} className="white-button-rounded">Save</button>
      </div>
    </section>
  );
};

export default TodoForm;
