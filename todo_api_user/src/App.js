import './App.css';
import { useState } from 'react';
import './components/TodoList/TodoList';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoList/TodoForm';

function App() {
  const [items, setItems] =useState([]);
  return (
    <div className="App">
      <h1>Todos</h1>
      <hr/>
          <TodoList 
          items={items} 
          setItems={setItems}/>
    </div>
  );
}

export default App;
