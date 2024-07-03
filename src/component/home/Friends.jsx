import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography, styled } from '@mui/material';
import Box from '@mui/material/Box';
import { FaUserAlt } from "react-icons/fa";
import { TbFriendsOff } from "react-icons/tb";
import { ImBlocked } from "react-icons/im";

const Friends = () => {

  const db = getDatabase();
  const loggdata  = useSelector((state) => state.loggedinUderData.value);
  const [frds , setFrds] = useState([])

  useEffect(
    ()=>{
      const userRef = ref(db , 'friends');
      onValue(
        userRef , (snapshoot)=>{
          let ourUser = []
          snapshoot.forEach(
            (item)=>{
              console.log(item.val());
              if(item.val().receverId == loggdata.uid || loggdata.uid ==item.val().senderId){
                ourUser.push({...item.val(),id:item.key})
              }
              
            }
          )
          setFrds(ourUser);
        }
      )
    },[]
   );



  return (
    <>
    <Box
      height={450}
      width={344}
      paddingY={2}
      paddingX={1}
      boxShadow={3}
      borderRadius={2}
    >
        {/* <Grid item xs={12} md={12} lg={12}> */}
          <Typography sx={{fontWeight:600}} variant="h6" component="div">
            My Friends
          </Typography>
          <>
            <List >
              
                
                {
                  frds.map((item , index)=>(
                    <ListItem key={index}  style={{borderBottom:'1px solid gray'}}
                      secondaryAction={
                        <span>
                          <Button variant="outlined" color="error">Block</Button>
                        </span>
                        
                      }
                      
                    >
                      <ListItemAvatar>
                        <Avatar>
                            <FaUserAlt  />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.receverId == loggdata.uid ? item.senderName : item.receverName  }
                        secondary={item.receverId == loggdata.uid ? item.senderEmail :item.receveEmail}
                      />
                      {console.log(loggdata.uid)}
                    </ListItem>
                  ))
                }

                
              
            </List>
          </>
      {/* </Grid> */}
    </Box>
    </>
  )
}

export default Friends
