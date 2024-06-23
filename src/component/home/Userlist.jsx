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
                if(loggdata.uid  == item.val().receverUid){
                  ourUser.push({...item.val(),id:item.key})
                  // console.log(item.val().senderUid);
                }
                
              }
            )
            setFriendRequest(ourUser);
          }
        )
      },[]
     );

     

    let handleConfirm = (item)=>{
      console.log(item.id);
    }

    let handleCancel = (item)=>{
      console.log(item.id);
    }

  return (
    <div>
      <Grid item xs={12} md={7} lg={4}>
          <Typography sx={{ }} variant="h5" component="div">
            Friend request
          </Typography>

          {
            friendRequest.map((item,index)=>(
              <List style={{}}>

                    <ListItem key={index} style={{pt:0, pb:0 ,mb:0}}
                      secondaryAction={
                        <div style={{display:"flex",gap:"5px"}}>
                          <Button onClick={()=>handleConfirm(item)} variant="contained">Confirm</Button>
                          
                          <Button onClick={()=>handleCancel(item)} variant="contained">cancel</Button>
                        </div>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                            <p>{item.receverUserName}</p>z
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
