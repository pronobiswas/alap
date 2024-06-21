import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography, styled } from '@mui/material';
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
      const userRef = ref(db , 'frndRequest');
      onValue(
        userRef , (snapshoot)=>{
          let ourUser = []
          snapshoot.forEach(
            (item)=>{
              if(item.val().senderUid == loggdata.uid || loggdata.uid ==item.val().receverUid){
                ourUser.push(item.val().senderUid +  item.val().receverUid)
                console.log(item.val().senderUid);
              }
              
            }
          )
          setFrds(ourUser);
        }
      )
    },[]
   );
   console.log(frds);



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
                console.log()
              }
                
                {
                  frds.map((item , index)=>(
                    <ListItem key={index}  style={{borderBottom:'1px solid gray'}}
                      secondaryAction={
                        <span>
                          {
                            frds.includes(loggdata.uid + item.id) || frds.includes(item.id + loggdata.uid)
                            ?
                            <button ><TbFriendsOff />h</button>

                            :
                            <button ><ImBlocked /></button>
                          }

                          {
                            console.log(item.id)
                          }
                        </span>
                        
                      }
                      
                    >
                      <ListItemAvatar>
                        <Avatar>
                            <FaUserAlt  />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Single-line item"
                        secondary='hello world'
                      />
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
