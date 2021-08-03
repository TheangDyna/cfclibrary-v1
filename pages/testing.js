import React, {useState, useEffect} from 'react';
import {Button, Typography} from '@material-ui/core';

const tesing = () => {
    const [age, setAge] = useState(1);
    useEffect(()=>{
        console.log(age);
    })
    return ( 
        <div>
            <h1>Testing | Page</h1>
            <h2>I am {age} year(s) old</h2>
            <Button variant='outlined' color='secondary' onClick={()=>setAge(age+1)}>
                <Typography>
                     Increase my age
                </Typography>
            </Button>
            <Button variant='outlined' color='secondary' onClick={()=>setAge(age-1)}>
                <Typography>
                    Deincrease my age
                </Typography>
            </Button>
        </div>
     );
}
 
export default tesing;