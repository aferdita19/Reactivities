import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, ListItem } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css' ;

function App() {

    const[activities,setActivities] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/activities').then((response:any) =>{
        console.log(response);
        setActivities(response.data);
      })
    },[])
 


  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
    
       <List>
  
          {activities.map((activity:any) =>(
            <ListItem key={activity.id}> 
            {activity.title}
             </ListItem>
          ))}
      
        </List>
     
    </div>
  );
}

export default App;
