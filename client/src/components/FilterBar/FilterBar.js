



const FilterBar = ({setFilter, filter}) =>{
    return(
        <div>
             <div>
               
              <input type = "checkbox" name = "FullTime" value = {filter}
               onChange = { (e) =>{
                setFilter(e.target.checked);
                
            }}
              /><label >Full time</label>
              <input type = "checkbox" name = "PartTime" value = {filter}
                 onChange = { (e) =>{
                    setFilter(e.target.checked);
                    
                }}
              /><label >Part time</label>
           </div>
           <div>
              
              <input type = "checkbox" name = "InterStudent" value = {filter}
                 onChange = { (e) =>{
                    setFilter(e.target.checked);
                    
                }}
              /><label >International</label>
              <input type = "checkbox" name = "Student" value = {filter}
                 onChange = { (e) =>{
                    setFilter(e.target.checked);
                   
                }}
                /><label >Student</label>
              <input type = "checkbox" name = "Graduate" value = {filter}
                 onChange = { (e) =>{
                    setFilter(e.target.checked);
                   
                }}
                /><label >Graduate</label>
           </div>
        </div>
    )
};


export default FilterBar;