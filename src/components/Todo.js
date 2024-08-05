import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task}) => {
  return (
    <div className='Todo'>
      <p>{task.task}</p>
      <div>
        {/* 편집 아이콘 */}
          <FontAwesomeIcon icon={faPenToSquare} />
        {/* 삭제 아이콘 */}
        <FontAwesomeIcon icon={faTrash} />
        </div>
    </div>
  )
}

export default Todo
