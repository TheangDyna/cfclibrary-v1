import React, {useState} from 'react';

const Home = () => {

    const [users, setUsers] = useState([
        {name: 'dyna', age: 30},
        {name: 'danit', age: 12},
        {name: 'danit', age: 12},
    ]);
    
    return ( 
       <div>
           {users.map((user)=>(
               <div>
                   <h2>User'name: {user.name}</h2>
                    <p>Age: {user.age}</p>
               </div>
           ))}
       </div>
     );
}
 
export default Home;
