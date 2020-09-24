
import React from 'react';
import "./Navbar.css";
import Button from "./Button";
import Search from "./Search.js"

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo bold">Employee Directory</div>
            <div className="descriptor">
                <div className="bold">Sort Options: </div>
                <Button>Name</Button>
                <Button>UID</Button>
                <Button>Age</Button>
            </div>
            <div className="descriptor">
                <div className="bold">Filter Options: </div>
                <Button>Filter Off</Button>
                <Button>Gender</Button>
            </div>
        </div>
    )
}
export default Navbar;