import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { IoSend } from "react-icons/io5";
import { MdEmojiSymbols } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { loggedInUser } from '../../feature/AuthSlice';
// import { loggedInUser } from '../../feature/AuthSlice';

const Masages = () => {

  const loggdata = useSelector((state) => state.loggedinUderData.value);
  const sendsms =()=>{
    console.log(loggdata);
  }
  return (
    <>
      <div id="masagesSection">

        <div className="masageHeader">
          <h1>{loggdata.displayName}</h1>
        </div>
        <div className="masageBody">
          <div className="massageRow">
            <div className="smsBox receiver"></div>
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
      
    </>
  )
}

export default Masages
