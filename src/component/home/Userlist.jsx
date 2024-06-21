import { Avatar, Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { MdDelete } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'





const Userlist = () => {

  const loggdata  = useSelector((state) => state.loggedinUderData.value);
    const auth = getAuth();
    const db = getDatabase();

    let [friendRequest , setFriendRequest] = useState([])
    let[confirmCancel , setConfirmCancel] = useState(false)

    useEffect(
      ()=>{
        const userRef = ref(db , 'frndRequest');
        onValue(
          userRef , (snapshoot)=>{
            let ourUser = []
            snapshoot.forEach(
              (item)=>{
                if( item.key != loggdata.uid){
                  ourUser.push({...item.val(),id:item.key})
                }
                
              }
            )
            setFriendRequest(ourUser);
          }
        )
      },[]
     );

     

    let handleConfirm = ()=>{
        console.log(friendRequest);
    }

    let handleCancel = ()=>{

    }

  return (
    <div>
      <Grid item xs={12} md={6} lg={3}>
          <Typography sx={{ }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>

          {
            friendRequest.map((item,index)=>(
              <List style={{}}>

                    <ListItem key={index} style={{pt:0, pb:0 ,mb:0}}
                      secondaryAction={
                        confirmCancel ?
                        <Button onClick={handleConfirm} variant="contained">Confirm</Button>
                        :
                        <Button onClick={handleCancel} variant="contained">cancel</Button>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                            <p>{item.receverUserName}</p>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.receverUserName}
                        secondary={item.receverEmail}
                      />
                    </ListItem>,
                  
                
                
              </List>
            ))
          }
          
          
      </Grid>
    </div>
  )
}

export default Userlist
