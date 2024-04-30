import React, { useReducer, useState } from 'react'
function reducer(state, action){
 switch (action.type) {
  case 'SET_TODO':
    return{
      ...state,
      todo:action.value
    }
    case 'ADD_TODO':

    const newTodo = {
  
    };
      return{
        ...state,

        todos:[
          ...state.todos,
          action.todo
      ]
      }

 }
}

const index = () => {

const [state,dispatch]= useReducer(reducer,{
  todos:[],
  todo:''
})


 const submitHandle = e =>{
  e.preventDefault()
dispatch({
  type:'ADD_TODO',
  todo: state.todo
})


 
 const onChange= e=>{
  //setTodo(e.target.value)
  dispatch({
type: 'SET_TODO',
value: e.target.value

  })
 }
  return (
    <>
    <h1>TodoApp</h1>
    <form onSubmit={submitHandle}>
      <input value={state.todo} onChange={onChange} type="text" />
      <button disabled={!state.todo} type='submit'>Add</button>
    </form>
    <ul>
      {state.todos.map((todo, index) =>(
     <li key={index}>
      {todo}
     </li>
      ))}
    </ul>
    </>
  )
}
}

export default index