import { Typography } from '@material-ui/core';
import React, {useState} from 'react';

const Home = () => {

    const [users, setUsers] = useState([
        {name: 'dyna', age: 10},
        {name: 'danit', age: 12},
    ]);
    
    return ( 
       <div>
           {users.map((user,index)=>(
               <div key={index}>
                   <Typography variant='h6'>
                        User'name: {user.name}
                   </Typography>
                   <Typography color='textSecondary'>
                        Age: {user.age}
                   </Typography>
               </div>
           ))}
       </div>
     );
}
 
export default Home;
