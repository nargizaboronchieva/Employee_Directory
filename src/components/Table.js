import React from 'react';
import "./Table.css"
import TableRow from "./TableRow"

function Table(){
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