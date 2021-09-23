import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [listOfItems, setItems] = useState([]);

  function handleInputText(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleAddButton() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={handleInputText}
          value={inputText}
          placeholder="New Task"
        />
        <button>
          <span onClick={handleAddButton}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listOfItems.map((toDoItem) => (
            <li>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
