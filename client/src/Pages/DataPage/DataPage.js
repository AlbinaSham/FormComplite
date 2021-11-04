import React, {useState, useEffect} from "react";

import axios from "axios";

import "./DataPage.css";
import Table from "../../components/Table/Table";
import FilterBar from "../../components/FilterBar/FilterBar";


const DataPage = () =>{

    const [students, setStudents] = useState([]);
    const [search, setSearch ] = useState('');
    const [filter, setFilter ] = useState(!false);

    



 const getStud = () =>{
     
        axios.get("http://localhost:5000/students").then((response) => {
          setStudents(response.data);
          console.log(response.data);
        });
      
 };
 useEffect(() =>{
     getStud();
 }, []);


 const filterNames = students.filter(name =>{
    return (name.fname.toLowerCase().includes(search.toLowerCase())
    || name.lName.toLowerCase().includes(search.toLocaleLowerCase())
    || name.skills.toLowerCase().includes(search.toLocaleLowerCase())
     
    )
    
  });
    
       
     
    return(
        
        <div className = "table">

            <div>
                  <input placeholder="Search" className = "searchBar" onChange = { (e) =>{
                       setSearch(e.target.value);
                       console.log(e.target.value);
                      }}
                    name = "serachbar" />
            </div>


          <FilterBar setFilter = {setFilter} filter = { filter}/>
          <Table filterNames ={filterNames} />
        </div>







               
               
         
    );
};

export default DataPage;