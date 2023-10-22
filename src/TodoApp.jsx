

import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1)
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () =>{
    setTodoId( todoId + 1 );
  }
  const previusTodo = () =>{
    if(todoId === 1) return;
    setTodoId( todoId -1 );
  }
  // console.log(todos);
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading : { isLoading ? 'TRUE' : 'FALSE' }</h4>
      <pre>{JSON.stringify(todo)}</pre>
     {/*  <ul>
        {
          todos.map( todo => (
            <li key={todo.id}>{todo.title}</li>
          ))
        }
      </ul> */}
      <button onClick={ previusTodo }>
        Previus Todo
      </button>
      <button onClick={ nextTodo }>
        Next Todo
      </button>
    </>
  )
}
