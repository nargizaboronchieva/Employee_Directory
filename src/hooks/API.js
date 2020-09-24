import React, {useState, useEffect} from 'react';
import axios from "axios"

// Check out 20-State/03-Ins_useEffect
export function useGet(url){
    const [employees, setEmployees] = useState([])

    // https://randomuser.me/documentation#howto
    // requests n employees from random user api

    useEffect(()=> {
        async function getEmployees(){
            try {
                const response = await axios.get(url)
                setEmployees(response.data.results)
            } catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }
        }
        getEmployees()
    }, [url])

    return employees
}