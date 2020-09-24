import React, {useState, useEffect} from 'react';
import { useGet } from "../hooks/API.js"
import "./Table.css"
import TableRow from "./TableRow"

function Table(){
        // const [url, setUrl] = useState("");
        const employees =useGet("https://randomuser.me/api/?results=250");
        console.log(employees)
    
    return(
        <table>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>UID</td>
                    <td>Gender</td>
                    <td>E-mail</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                <TableRow />
                <TableRow />
                <TableRow />
            </tbody>
        </table>
    )
}
export default Table; 