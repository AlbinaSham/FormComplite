import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React , { useState } from "react";

import FormPage from './Pages/FormPage/FormPage';
import NavBar from './components/NavBar/NavBar';
import DataPage from "./Pages/DataPage/DataPage";
import LogIn from "./Pages/LogIn/LogIn";

function App() {


  
    const [token, setToken] = useState();
  
   
   
    return(
  
    <div >
      
  
     
    <Router>
      <NavBar />
        <Switch>
        
          <Route exact path = "/">
            <FormPage /> 
          </Route>
         {
           (!token)?<LogIn setToken={setToken} /> :
           <Route exact path = "/data">
           <DataPage />
         </Route>
         }
              
         
           
       
          
    
        </Switch>
    </Router>
    
          
        </div>
  );
}

export default App;
