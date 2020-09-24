import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import Navbar from "./components/Navbar";
import Button from "./components/Button"
import Table from "./components/Table"
function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then((res) => {
      setEmployees(res.data.results);
    })
  }, []);

  console.log(employees)
  return (
    <div className="App">
      <Navbar/>
      <Button/>
      <Table/>
    </div>
  );
}

export default App;
