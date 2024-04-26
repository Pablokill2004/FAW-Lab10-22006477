import { useState } from 'react';
import basura from './basura.jpg'; // Tell webpack this JS file uses this image
import './App.css';

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [countTask, setCountTask] = useState(0);

  const handleAddToDo = () => {
    if (newTask !== '') {
      let newToDoItem = {
        task: newTask,
      };
      setCountTask(countTask + 1);

      let updatedToDoArr = [...allTodos];
      updatedToDoArr.push(newToDoItem);
      setAllTodos(updatedToDoArr);
      setNewTask('');
    } else {
      alert('Insert a task! (ㆆ_ㆆ)');
    }
  };

  const handleDeleteToDo = (index) => {
    const updatedTodos = [...allTodos];
    updatedTodos.splice(index, 1);
    setAllTodos(updatedTodos);
    setCountTask(countTask - 1);
  };

  const DeleteAlltasks = (index) => {
    if (countTask === 0) {
      alert("There's no tasks! ✅");
    } else {
      setAllTodos([]);
      setCountTask(0);
    }
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="border-left">
          <label htmlFor="exampleInputPassword1">
            <h1>Mini Task Dashboard</h1>
          </label>
        </div>
        <div class="container">
          <div class="row">
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
            <div class="col">
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={handleAddToDo}
              >
                add task
              </button>
            </div>
            <div
              class="col badge bg-primary text-wrap mt-1"
              style={{ padding: '1rem' }}
            >
              <label class="fw-bold">{countTask} pending tasks</label>
            </div>
            <div class="col">
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={DeleteAlltasks}
              >
                Delete all tasks
              </button>
            </div>
          </div>
        </div>
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
