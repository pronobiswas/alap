import { Button, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'
import { CiMenuKebab } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Userlist from '../../component/home/Userlist';
import Friends from '../../component/home/Friends';


const HomePage = () => {

    const db = getDatabase();
    let [userList , setUserlist] = useState([]); 
    let [friendRequest , setFriendRequest] = useState([])
    let[addCancel , setAddCancel] = useState(true)
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
    //  ==friendRequest===
     useEffect(
      ()=>{
        const userRef = ref(db , 'frndReuest');
        onValue(
          userRef , (snapshoot)=>{
            let frndRqst = []
            snapshoot.forEach(
              (item)=>{
                
                frndRqst.push({...item.val(),id:item.key})
              }
            )
            setFriendRequest(frndRqst);
            
          }
        )
      },[]
     )

     let handleAddFriend=(item)=>{
      set (push(((ref(db, 'frndRequest/')))), {
        receverUserName: item.username,
        receverEmail: item.email,
        receverUid: item.id,

        SenderName:loggdata.displayName,
        senderEmail:loggdata.email,
        senderUid:loggdata.uid
      });
      // setAddCancel(false)
     }
     
  
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
                          addCancel ?
                        <Button variant="contained" className='myBtn' onClick={()=>handleAddFriend(item)}>Add Friend</Button>
                        :
                        <Button variant="contained" className='myBtn'>cancel</Button>
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
    </>
  )
}

export default HomePage
