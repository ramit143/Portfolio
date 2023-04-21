import React, { useEffect } from 'react';
// import './style.css';
import axios from 'axios';
import { useState } from 'react';

export default function Appabc() {
  const [data, setdata] = useState([]);
 useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
        setdata(res.data);
        console.log(res.data);
    })
 },[])
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :</p>
    </div>
  );
}
