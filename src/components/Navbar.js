
import React from 'react';
import "./Navbar.css";
import Search from "./Search"

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo bold">Employee Directory</div>
            <div className="descriptor">
                <div className="bold">Employee Search </div>
                <Search/>
            </div>
        </div>
    )
}
export default Navbar;