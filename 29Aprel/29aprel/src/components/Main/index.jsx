import React, { useEffect, useState } from 'react';

import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import "./style.css"



function index() {
    const [data, setData] = useState([]);
    const[categories,setCategories]=useState([])
    const[category,setcategory]=useState([])

    
const getAll =async()=>{
    let response = await axios.get ("https://northwind.vercel.app/api/categories");
    setCategories(response.data)
};

const addCategory= async(e)=>{
    e.preventDefault();
    let newCat= {
        name:category,
    }
    let res = await axios.post("https://northwind.vercel.app/api/categories", newCat)
    setCategories([...categories, res.data])
    setCategory("")
}

const deleteCategory= async (id) =>{
    await axios.delete(`${"https://northwind.vercel.app/api/categories"}/${id}`)
}


useEffect(() => {
//   axios("https://northwind.vercel.app/api/categories").then((res) => {
//     console.log(res.data);
//     setData(res.data);
//   });
getAll()
}, []);
  return (
    <div className="container">
      <div className="addTask">
        <form>
          <input id="input" type="text" placeholder="Add your task" />
          <button id="add" className="btn">Add Task</button>
        </form>
      </div>
      <div className="taskList">
        <ul>
            {categories&&
            categories.map((item)=>(
                <li key={item.id}>
                    <span>{item.name}</span>
                    <button id='delete' className='btn'>
                        Delete
                    </button>
                </li>
            ))
            }
            {/* {data.map((elem)=>{
                return(
                    <li >
                       
                        <span> {elem.name}</span>
            <button id="delete" className="btn"  >Delete Task</button>
                    </li>
                )
            })} */}
        </ul>
      </div>
    </div>
  )
}

export default index