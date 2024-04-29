import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

import Button from "react-bootstrap/Button";
import AddData from "./AddData";

const Tablex = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <>
      <AddData setData={setData} data={data} />
  
    </>
  );
};

export default Tablex;
