import React, {useEffect, useState} from "react";
import "react-multi-carousel/lib/styles.css";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Link
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({


}));

const test = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
}, [])
  return (
    <div>
      {users.map(user => (
        <Typography key={user.firstName}>{user.firstName}</Typography>
      ))}
    </div >
  );
}

export default test;