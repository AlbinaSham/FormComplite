


const Table = ({filterNames}) =>{
    return(
        
        <div>
        <table>
                         <thead>
                             <tr>
                               <th> Id </th>
                               <th>First name</th>
                               <th>Last name</th>
                               <th>Email</th>
                               <th>Phone</th>
                               <th>Skills</th>
                               <th>Status</th>
                               <th>Availability</th>
                               <th>Files</th>
                           </tr>
                           </thead>
                           </table>
                          
                          
                          
                           {
        filterNames.map((student, key) =>{
                return(
                   <div key = {key}>
                   <table>
                   <tbody >
             <td>{student.id} </td>
             <td>{student.fname}</td>
             <td>{student.lName}</td>
             <td>{student.email}</td>
             <td>{student.phone}</td>
             <td>{student.skills}</td>
             <td>{student.status}</td>
             <td>{student.availability}</td>
             <td><h6>{student.file.data}</h6></td>

                           </tbody>
                           </table>
                     
                      
                       

                       


                    </div>
              )
          }) 
       }
        </div>
          
       
       
       
    )
};

export default Table;