import React, { useState } from 'react';
import { TodoForm }  from './TodoForm';
import { v4 as uuidv4 } from "uuid";  // 유일한 ID 생성을 위한 uuid 라이브러리 사용
import  { Todo } from './Todo';

// TodoWrapper 컴포넌트 선언
export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    console.log(todos);
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // TodoWrapper 컴포넌트의 렌더링 부분
  return (
    <div className='TodoWrapper'>
      {/* TodoForm 컴포넌트를 렌더링하고 addTodo 함수를 props로 전달 */}
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {/* todos 상태 배열을 map 함수로 순회하여 각 todo를 렌더링 */}
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      ))}
    </div>
  );
}

// TodoWrapper 컴포넌트를 기본으로 내보냄
export default TodoWrapper;
