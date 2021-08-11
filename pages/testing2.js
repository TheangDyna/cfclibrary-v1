import React from 'react';
import {
  MenuItem,
  TextField,
} from '@material-ui/core';

const testing2 = () => {
  const [age, setAge] = React.useState('10 A');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <TextField
          variant='text'
          select
          size='small'
          fullWidth
          value={age}
          onChange={handleChange}
      >
          <MenuItem value='10 A'>10 A</MenuItem>
          <MenuItem value='10 B'>10 B</MenuItem>
          <MenuItem value='11 A'>11 A</MenuItem>
          <MenuItem value='11 B'>11 B</MenuItem>
          <MenuItem value='12 A'>12 A</MenuItem>
          <MenuItem value='12 B'>12 B</MenuItem>
      </TextField>
    </div>
  );
}
 
export default testing2;