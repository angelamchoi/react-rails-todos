import React from 'react'

const TodoForm = ({items, setItems}) => {
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

export default TodoForm;
