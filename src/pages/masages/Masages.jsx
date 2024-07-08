import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { IoSend } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdEmojiSymbols } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { loggedInUser } from '../../feature/AuthSlice';
import { activeChatUser } from '../../feature/activeMsgSlice';

import { getDatabase, ref, onValue, push, set } from "firebase/database";


const Masages = () => {

  const db = getDatabase();
  const dispatch = useDispatch();
  const loggdata  = useSelector((state) => state.loggedinUderData.value);
  const activeChatData = useSelector((state) => state.activeChatUser.value)
  const [frds , setFrds] = useState([]);

  const [masageFriends , setMasageFriends] = useState([]);

  const [displayMasage , setDisplayMasages] = useState([])
  // ==========masage value=========
  const [smsTxt , setSmStext] = useState();


  // ***********reading Friend list data**********
  useEffect(
    ()=>{
      const userRef = ref(db , 'friends');
      onValue(
        userRef , (snapshoot)=>{
          let ourUser = []
          snapshoot.forEach(
            (item)=>{
              
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
   

 
 
   //  *********sent masages in database*******
   const sendsms =()=>{
     
     set(push(ref(db, 'allMsg/')), {
       username: loggdata.displayName,
       email: loggdata.email,
       profile_picture : "picture" ,
       userId: loggdata.uid,
 
       chatSmg : smsTxt ,
 
       friendsName: loggdata.uid == activeChatData.receverId ?  activeChatData.senderName : activeChatData.receverName ,
       friendsEmail : loggdata.uid == activeChatData.receverId ? activeChatData.senderEmail : activeChatData.receveEmail,
       profile_picture : "picture" ,
       friendsId: loggdata.uid == activeChatData.receverId ? activeChatData.senderId : activeChatData.receverId 
 
     }).then(console.log("sent to database"));
   }
   // <<<<<<<<<<< sent Masages In DataBase >>>>>>>>>>>>
  

  //  **********reading allSms data in database************
  useEffect(
    ()=>{
      const userRef = ref(db , 'allMsg');
      onValue(
        userRef , (snapshoot)=>{
          let ourUser = [];
          let activeFrndId = loggdata.uid == activeChatData?.senderId ? activeChatData?.receverId : activeChatData?.senderId ;
          snapshoot.forEach(
            (item)=>{
              console.log(item.val());
              console.log(item.val().friendsId == activeFrndId && item.val().receiverid == loggdata.uid) ;

              if((item.val().userId == loggdata.uid && item.val().friendsId ==activeFrndId) || (item.val().friendsId == loggdata.uid && item.val().userId == activeFrndId)){
                ourUser.push({...item.val() , id:item.key})
              }
              
            }
          )
          setMasageFriends(ourUser);
          
        }
        
      )
    },[activeChatData]
   );
   //  <<<<<<<<<< reading allSms data in database >>>>>>>>>>>>


  let handleSmSfrndList =(item)=>{
    dispatch(activeChatUser(item))
    // console.log(loggdata);
    
  }

 
  return (
    <>
      <div id="masagesSection">

        <div className="msageFriendlist">

          <div className="SrcBox_SmsFrndList">
            <div className='relative'>
              <input type="text" className='srcSmStriendInput'/>
              <div className='srcIcon'><CiSearch /></div>
            </div>
            <span className='menuIcon'><CiMenuKebab /></span>
          </div>

          <div className="frndList">
                {
                  frds.map((item , index)=>(
                    
                      <ul key={index}>
                        <li onClick={()=>handleSmSfrndList(item)}>
                          <div className="avatarBox"></div>
                          <div className="userDetails">
                            <h3>{item.receverId == loggdata.uid ? item.senderName : item.receverName}</h3>
                            <p>{item.receverId == loggdata.uid ? item.senderEmail :item.receveEmail}</p>
                          </div>
                          
                        </li>
                      </ul>
                  ))
                }
          </div>
        </div>
        {
          // console.log(loggdata)
          // console.log(activeChatData.senderId == loggdata.uid)
        }

        <div className="masageBox">

          <div className="masageHeader">
            {
               !activeChatData ?
              <h1>select a user</h1>
              :
              <h1>
                {
                  activeChatData.receverId== loggdata.uid ? activeChatData.senderName : activeChatData.receverName
                }
              </h1>
            }
          </div>

          <div className="masageBody">

            {!activeChatData ?

              <>
                <h1>no User selected</h1>
              </>
              :
              <>
                <div className="massageRow receiver">
                  <div className="smsBox ">
                    <div className="avatarBox"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus minima temporibus saepe delectus ad nihil quas veniam sapiente maiores, voluptatem nisi reprehenderit facilis doloribus esse explicabo illum modi dolorum ut quisquam? Mollitia eveniet, aliquid recusandae perferendis in tenetur sequi!</p>
                  </div>
                </div>
                <div className="massageRow sender">
                  <div className="smsBox">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus minima temporibus saepe delectus ad nihil quas veniam sapiente maiores, voluptatem nisi reprehenderit facilis doloribus esse explicabo illum modi dolorum ut quisquam? Mollitia eveniet, aliquid recusandae perferendis in tenetur sequi!</p>
                    <div className="avatarBox"></div>
                  </div>
                </div>
              </>
            }

            {console.log(masageFriends)}
              {
                
                masageFriends.map((item , index)=>(
                  
                    <ul key={index}>
                      {console.log(item.userId)}
                      <li >
                        {
                          item.userId == loggdata.uid 
                          ?
                          <h2>namaskar</h2>
                          :
                          <p>joy horibol</p>

                        }
                      </li>
                    </ul>
                ))
              }
            



          </div>

          <div className="smsFooter">
            
            <div className="smsInput">
              <input onChange={(e)=>setSmStext(e.target.value)} type="text" className='SmsInputFild' placeholder='write your masages'/>
              <button className='emojiBtn'><MdEmojiSymbols /></button>
            </div>

            <div className="smsSend">
              {
                activeChatData ?
                <Button onClick={sendsms} variant="contained" endIcon={<IoSend />}>Send</Button>
                :
                <span></span>
              }
            </div>
            
          </div>
        </div>

      </div>
      
    </>
  )
}

export default Masages
