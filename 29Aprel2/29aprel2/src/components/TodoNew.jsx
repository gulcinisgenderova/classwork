// import React, {useState, useReducer, useRef} from 'react'

// import {act} from "react"
// import reducer from './reducers/reducer'

// const TodoNew = () => {

//  const [state, dispatch]= useReducer(
//     reducer,
// {
//     value: "",
//     data: [],
//     count:0,
//     newValue:"",
// }
// )

// const decInput = useRef();
//   return (
//     <div>
// <input type="text" ref={decInput} />
// <button onClick={()=>{
//    dispatch({
//     type: "SetNewValue",
//     newValue:decInput.current.value*1
//    })
// }}>
//     Dec
    
// </button>

// <button onClick={()=>{
//     dispatch({
//         type: "SetData",
//         data: state.value,
//     })
// }}>
//     Inc</button>

//     <input
//         type="text"
//         value={state.value}
//         onChange={(e) => {
//           dispatch({
//             type: "SetValue",
//             value: e.target.value,
//           });
//         }}
//       />
//     </div>
//   )
// }

// export default TodoNew





import React, {useRef} from 'react'

const reducers = () => {
  return (
    <div>reducers</div>
  )
}

export default reducers

