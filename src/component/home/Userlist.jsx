import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography, styled } from '@mui/material'
import React from 'react'
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { MdDelete } from "react-icons/md";
import { FaFolder } from "react-icons/fa";

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: "red",
  }));

const Userlist = () => {

    const auth = getAuth();
    const db = getDatabase();

    let handleBtn = ()=>{
        // const starCountRef = ref(db, 'users/');
        //     onValue(starCountRef, (snapshot) => {
        //     const data = snapshot.val();
        //     updateStarCount(postElement, data);
        //     });
        //     console.log(data);
    }

  return (
    <div>
      <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          <Demo>
            <List >
              
                <ListItem
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
          </Demo>
      </Grid>
    </div>
  )
}

export default Userlist
