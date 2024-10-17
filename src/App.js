import React from "react";
import Todolist from "./components/Todolist";
function App() {

  const items = [
    {
      id: '1',
      text: 'fan',
      completed: false
    },
    {
      id: '2',
      text: 'Ok',
      completed: false
    },
    {
      id: '3',
      text: 'Burh',
      completed: false
    }
  ];
  const title = 'Thing to Do';
  return (
    <div className="container">
      <div className="row">
        <Todolist title={title} items={items} />
      </div>
    </div>
  );
}

export default App;
