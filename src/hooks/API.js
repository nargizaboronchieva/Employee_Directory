import {useState, useEffect} from 'react';
import axios from "axios"

// Check out 20-State/03-Ins_useEffect
export function useGet(url){
    const [employees, setEmployees] = useState([])


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
    },[url])

    useEffect(()=>{
        switch(sort){
            case "name":
                sortByName()
                break
            default:
                console.log("sort does not match the sort case")
        }
    }, [sort])

    function sortFunc(sort){
        setSort(sort);
    }



        function sortByName(){
            console.log(`1.${employees[0].name.first} 2.${employees[1].name.first}`)
            employees.sort(function(a,b){
            if(a.name.first < b.name.first){
                return -1;
            }else{
                return 1;
            }
        })

        setEmployees(employees)

    }

    return {employees, sortFunc}