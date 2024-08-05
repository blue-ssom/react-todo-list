import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from "uuid";  // 유일한 ID 생성을 위한 uuid 라이브러리 사용

// TodoWrapper 컴포넌트 선언
const TodoWrapper = () => {
  // useState 훅을 사용하여 todos 상태를 관리. 초기값은 빈 배열
  const [todos, setTodos] = useState([]);

  // 새로운 todo를 추가하는 함수
  const addTodo = todo => {
    // 새로운 todo 객체를 만들고 기존의 todos 배열에 추가
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    // 현재 todos 배열을 콘솔에 출력
    console.log(todos);
  };

  // TodoWrapper 컴포넌트의 렌더링 부분
  return (
    <div className='TodoWrapper'>
      {/* TodoForm 컴포넌트를 렌더링하고 addTodo 함수를 props로 전달 */}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

// TodoWrapper 컴포넌트를 기본으로 내보냄
export default TodoWrapper;
