import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from "uuid";
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  // todos 상태가 변경될 때마다 콘솔에 로그를 남김
  useEffect(() => {
    console.log("Todos after update:", todos);
  }, [todos]);


  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    console.log("Todos after adding:", todos);  // 콘솔 로그 추가
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = id => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ));
  };

  const editTask = (task, id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    ));
  };

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo => (
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo}/>  // key prop 추가
        ) : (
          <Todo key={todo.id} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
      ))}
    </div>
  );
};

export default TodoWrapper;
