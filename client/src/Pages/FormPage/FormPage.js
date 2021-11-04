import  {useState} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





import "./FormPage.css";


const FormPage = () =>{
    const [fname, setfName] = useState("");
    const [ lName, setlName ] = useState ("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [skills, setSkills] = useState("");
    const [status, setSatus] = useState("");
    const [availability, setAvailability] = useState("");
    const [files, setFiles] = useState([]);

    const [studentList, setstudentList] = useState([]);





  

      const addStudent = (e) => {
        e.preventDefault();
        toast.info('Submitted!');
      
        
        axios.post('http://localhost:5000/create', {
          fname: fname,
          email: email,
          lName: lName,
          phone: phone,
          skills: skills,
          status: status,
          availability:availability,
          files:files,
          
        }).then(() => {
          setstudentList([
            ...studentList,
            {
              fname: fname,
              email: email,
              lName: lName,
              phone: phone,
              skills: skills,
              status: status,
              availability:availability,
              files:files,
              
            },
          ]);
        });
      };

     
      
   
   


   






    return(
        <div className="container">
  <form action="" method="POST"
      className ="formContainer">
        <div className="introContainer">
               <div className="line">

               </div>

        <h1><b>Register  Resume Dropbox</b></h1>
        
        <h4>Please provide your information for the future opportunity.</h4>
    </div>


    <div className="smalllContainer">
      <h2>First name</h2>
      <input type="text" 
          placeholder="Your answer" 
          onChange={(event) => {
            setfName(event.target.value);
          }}
          required />
    </div>

    <div className="smalllContainer">
      <h2>Last name</h2>
      <input type="text" 
          placeholder="Your answer" 
          onChange={(event) => {
            setlName(event.target.value);
          }}
          required />
    </div>

    <div className="smalllContainer">
      <h2>Email</h2>
      <h4>Valid email address</h4>
      <input type="email" 
         placeholder="Your answer" 
         onChange={(event) => {
         setEmail(event.target.value);
      }}
       required />
    </div>

    <div className="smalllContainer">
      <h2>Phone</h2>
      <input type="number"
         placeholder="Your answer"
         onChange={(event) => {
         setPhone(event.target.value);
      }}
        required />
    </div>
    <div className="smalllContainer">
      <h2>Top tree skills & number of years</h2>
      <input type="text" 
         placeholder="Your answer" 
         onChange={(event) => {
          setSkills(event.target.value);
      }}
       required />
    </div>

    <div className="semestrContainer">
      <h2>Status</h2>
      <div className="checjboxContainer">
       <div>
         <input type="radio"  value = "InterStudent" 
         onClick ={ (e) =>{
          setSatus(e.target.value);
         }} 
          /><label >Internation studen</label>
       </div>
       <div >
           <input type="radio"  value = "Graduate"
            onClick ={ (e) =>{
              setSatus(e.target.value);
            }}
            /><span>Graduate</span>
       </div>
       <div >
         <input type="radio"  value = "Student"
          onClick ={ (e) =>{
            setSatus(e.target.value);
          }}
          /><span>Student</span>
       </div>
       </div>
       </div>



       <div className="semestrContainer">
              <h2>Availability</h2>
           <div className="checjboxContainer">
             <div>
                <input type="radio"  value = "FullTime" 
                    onClick ={ (e) =>{
                    setAvailability(e.target.value);
                     }} 
                   /><label >Full time</label>
              </div>
            <div >
                <input type="radio"  value = "PartTime"
                   onClick ={ (e) =>{
                   setAvailability(e.target.value);
                   }}
                 /><span>Part time</span>
            </div>
          </div>
        </div>



       
    <div className="smalllContainer">
      <h2>Upload resume</h2>
      <input type="file" enctype="multipart/form-data"
         onChange ={
           (e) =>{
             setFiles(e.target.files);
             console.log(e.target.files);
           }
         }
      
       required />
    </div>

  <button onClick ={addStudent}
 
     type="submit">Submit</button>

  </form>

  
       
   
</div>
    );
};

export default FormPage;


 