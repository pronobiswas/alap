import React from 'react';
import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography, styled } from '@mui/material';
import Box from '@mui/material/Box';
import { FaUserAlt } from "react-icons/fa";
import { TbFriendsOff } from "react-icons/tb";
import { ImBlocked } from "react-icons/im";

const Friends = () => {
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
            <List className=''>
              
                <ListItem  style={{borderBottom:'1px solid gray'}}
                  secondaryAction={
                    <IconButton edge="end">
                      <button >hello</button>
                    </IconButton>

                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                        <FaUserAlt />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary='hello world'
                  />
                </ListItem>

                <ListItem  style={{borderBottom:'1px solid gray'}}
                  secondaryAction={
                    <IconButton edge="end">
                      <button ><TbFriendsOff /></button>
                      <button ><ImBlocked /></button>
                    </IconButton>
                    

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

                <ListItem  style={{borderBottom:'1px solid gray'}}
                  secondaryAction={
                    <IconButton edge="end">
                      <button >hello</button>
                    </IconButton>

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
                
              
            </List>
          </>
      {/* </Grid> */}
    </Box>
    </>
  )
}

export default Friends
