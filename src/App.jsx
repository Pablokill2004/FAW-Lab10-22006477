import { useState } from 'react';
import basura from './basura.jpg'; // Tell webpack this JS file uses this image
import './App.css';

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddToDo = () => {
    let newToDoItem = {
      task: newTask,
    };
    let updatedToDoArr = [...allTodos];
    updatedToDoArr.push(newToDoItem);
    setAllTodos(updatedToDoArr);
    setNewTask('');
  };

  const handleDeleteToDo = (index) => {
    const updatedTodos = [...allTodos];
    updatedTodos.splice(index, 1);
    setAllTodos(updatedTodos);
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="border-left">
          <label htmlFor="exampleInputPassword1">
            <h1>Mini Task Dashboard</h1>
          </label>
        </div>
        <div>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter a task"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={handleAddToDo}
        >
          add task
        </button>
      </form>

      <div className="todo-list mt-2">
        {allTodos.map((item, index) => (
          <TodoItem
            key={index}
            task={item.task}
            onDelete={() => handleDeleteToDo(index)}
          />
        ))}
      </div>
    </div>
  );
}

function TodoItem({ task, onDelete }) {
  return (
    <div className="todo-list-item">
      <div className="todo-text">
        <p>{task}</p>
        <img src={basura} alt="Delete" className="icon" onClick={onDelete} />
      </div>
    </div>
  );
}
export default App;
