import React, {useState} from 'react'
import './TodoForm';
const api_url=`https://localhost:3001/api/v1/todos`


const TodoList = () => {
  const [items, setItems] = useState([]);
    return (
      <div>
        <ul>
        <li>{items}</li>
          <li> Todo #1</li>
          <li> Todo #2</li>
        </ul>
      </div>
    )
  }

export default TodoList;

