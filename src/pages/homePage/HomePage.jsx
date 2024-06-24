import { Button, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'
import { CiMenuKebab } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Userlist from '../../component/home/Userlist';
import Friends from '../../component/home/Friends';
import SentRequest from '../../component/home/SentRequest';





const HomePage = () => {

    const db = getDatabase();
    let [userList , setUserlist] = useState([]); 
    let [friends , setFriends] = useState([])
    // let [requestedFriend , setRequestedFriend] = useState([])
    let[addCancel , setAddCancel] = useState([])
    const loggdata  = useSelector((state) => state.loggedinUderData.value);


    // ======user List======
     useEffect(
      ()=>{
        const userRef = ref(db , 'users');
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
            setUserlist(ourUser);
          }
        )
      },[]
     )
    

     let handleAddFriend=(item)=>{
      set (push((ref(db, 'frndRequest/'))), {
        receverUserName: item.username,
        receverEmail: item.email,
        receverUid: item.id,

        SenderName:loggdata.displayName,
        senderEmail:loggdata.email,
        senderUid:loggdata.uid
      });
      
     }
     

   
    //============friend list===========

     useEffect(
      ()=>{
        const frndsRef = ref(db , 'friends');
        onValue(
          frndsRef , (snapshoot)=>{
            let frnds = []
            snapshoot.forEach(
              (item)=>{
                // console.log(item.val());

                if(item.val().receverId == loggdata.uid){
                  frnds.push(item.val().receverId + item.val().senderId)
                }
                else if(item.val().senderId == loggdata.uid){
                  frnds.push( item.val().senderId + item.val().receverId )
                }
                
                setFriends(frnds);
              }
            )
          }
        )
      },[]
     )
     console.log(friends);

      //  ==friendRequest list===

     useEffect(()=>{
       const usersRef = ref(db, 'frndRequest');
       onValue(usersRef, (snapshot) => {
         let arr = []
         snapshot.forEach((item)=>{
          
            
            if(item.val().senderUid == loggdata.uid){
              arr.push(item.val().senderUid + item.val().receverUid)
            }else if(item.val().receverUid == loggdata.uid){
              arr.push( item.val().receverUid + item.val().senderUid )
            }
          })
          setAddCancel(arr)
          
        });
      },[])
      
      // console.log(addCancel);
  
  return (
    <>
      <div id="homepage">
        <div className="content_warpper"> 

          <div className="allUser contentbox">

            <div className="srcBox">
              <span><CiSearch /></span>
              <input type="text" className='srcInput'/>
              <span><CiMenuKebab /></span>
            </div>
            <h2>User List</h2>
            <ul>
              {
                userList.map((item,index)=>(
                  
                  <div className="userThumb" key={index}>
                    <div className="userIcon">
                      <div className="myAvatar">{item.index}</div>
                    </div>
                    <div className="uesrDes">
                      <h4>{item.username}</h4>
                      <p>{item.email}</p>
                    </div>
                    <div className="usersFeature">
                      <div className="frndBtnWarper">
                        {
                          addCancel.includes(loggdata.uid + item.id) || addCancel.includes(item.id + loggdata.uid ) 
                          ?
                          <Button variant="contained" className='myBtn'>cancel</Button>
                          :
                          friends.includes(loggdata.uid + item.id) || friends.includes(item.id + loggdata.uid )
                          ?
                          <Button variant="contained" color="success">Friend</Button>
                          :
                          <Button variant="contained" className='myBtn' onClick={()=>handleAddFriend(item)}>Add Friend</Button>
                          
                        }

                        {
                          // console.log(item)
                          // console.log(loggdata.uid )
                          // console.log(addCancel.includes(item.id+loggdata.Uid))
                          // console.log(addCancel.includes(loggdata.Uid + item.id) || addCancel.includes(item.id + loggdata.uid ))
                        
                        }
                        
                      </div>
                    </div>
                  </div>
                  
                ))
              }
            </ul>

          </div>
          <Friends/>

        </div>
      </div>
      <Userlist/>
      <SentRequest/>
      
      
    </>
  )
}

export default HomePage
