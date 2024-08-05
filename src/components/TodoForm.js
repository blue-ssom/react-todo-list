import React, { useState } from 'react';

// TodoForm 컴포넌트 선언
export const TodoForm = ({addTodo}) => {
  // useState 훅을 사용하여 value 상태를 관리. 초기값은 빈 문자열
  const [value, setValue] = useState("");

  // 폼 제출 시 호출되는 함수
  const handleSubmit = e => {
    // 폼의 기본 제출 동작을 막음
    e.preventDefault();

    // 현재 입력된 값을 콘솔에 출력
    // console.log(value);

    // addTodo 함수를 호출하여 부모 컴포넌트(TodoWrapper)로 값 전달
    addTodo(value);

    // 입력 필드가 제출 후에 빈 문자열로 초기화
    setValue("")
  };

  // TodoForm 컴포넌트의 렌더링 부분
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      {/* 텍스트 입력 필드. 값이 변경될 때마다 setValue 함수 호출 */}
      <input type="text" className='todo-input' value={value} placeholder='What is the task today?'
        onChange={(e) => setValue(e.target.value)}
      />
      {/* 제출 버튼 */}
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  );
}

// TodoForm 컴포넌트를 기본으로 내보냄
export default TodoForm;
