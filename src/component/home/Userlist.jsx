import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { MdDelete } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'





const Userlist = () => {

  const loggdata  = useSelector((state) => state.loggedinUderData.value);
    const auth = getAuth();
    const db = getDatabase();

    let [allUsers , setAllUsers] = useState([])

    let handleBtn = ()=>{
        const starCountRef = ref(db, 'users/');
            onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setAllUsers(data)
            });
            console.log(allUsers);
            console.log(loggdata);
    }

  return (
    <div>
      <Grid item xs={12} md={6} lg={3}>
          <Typography sx={{ }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          
            <List style={{margin:"0px",paddingBottom:"0px" ,padding:"0px",background:"gray",}}>
              
                <ListItem  style={{pt:0, pb:0 ,mb:0}}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <button onClick={handleBtn}>hello</button>
                    </IconButton>

                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                        <FaFolder />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary='hello world'
                  />
                </ListItem>,
              
            </List>
          
      </Grid>
    </div>
  )
}

export default Userlist
