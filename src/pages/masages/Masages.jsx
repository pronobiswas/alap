import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { IoSend } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdEmojiSymbols } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { loggedInUser } from '../../feature/AuthSlice';
// import { loggedInUser } from '../../feature/AuthSlice';

import { getDatabase, ref, onValue } from "firebase/database";

const Masages = () => {

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
  
  const sendsms =()=>{
    console.log(frds);

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
                        <li>
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

        <div className="masageBox">
          <div className="masageHeader">
            {
              loggdata ? 
              <h1>{loggdata.displayName}</h1>
              :
              <h1>Guest</h1>
            }
          </div>
          <div className="masageBody">
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
          </div>

          <div className="smsFooter">
            
            <div className="smsInput">
              <input type="text" className='SmsInputFild' placeholder='write your masages'/>
              <button className='emojiBtn'><MdEmojiSymbols /></button>
            </div>

            <div className="smsSend">
              <Button onClick={sendsms} variant="contained" endIcon={<IoSend />}>Send</Button>
            </div>
            
          </div>
        </div>

      </div>
      
    </>
  )
}

export default Masages
