import React, { useState } from "react";

const TodoForm = ({ toggleModal, todos, todo, setTodos, onEdit, target }) => {
  const [inputText, setInputText] = useState(todo ? todo.text: "");
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
  const handleSave = () => {
    if (target === "update") {
      onEdit(todo.id, inputText);
    } else {
      addData();
    }
    toggleModal();
  };

  const handleEnter = (button) => {
    if (button.key === "Enter") {
      handleSave();
    }
  };

  return (
    <section>
      <div className="my-6">
        <label className="text-lg">Todo Task</label>
        <input
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
          className="white-button"
        >
          Cancel
        </button>
        <button onClick={handleSave} className="blue-button">
          {target === "update" ? "Update" : "Save"}
        </button>
      </div>
    </section>
  );
};

export default TodoForm;
