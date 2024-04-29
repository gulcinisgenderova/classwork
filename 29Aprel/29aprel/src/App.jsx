import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './components/Main'
import LifeCycle from "./components/LifeCycle";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";

import './App.css'

function App() {


  return (
    <>
   <Main/>
   <Table />
    </>
  )
}

export default App
