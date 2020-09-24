import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Button from "./components/Button"
import Table from "./components/Table"
function App() {

 // console.log(employees)
  return (
    <div className="App">
      <Navbar/>
      <Button/>
      <Table/>
    </div>
  );
}

export default App;
