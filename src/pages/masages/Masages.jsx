import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { IoSend } from "react-icons/io5";
import { MdEmojiSymbols } from "react-icons/md";

const Masages = () => {
  return (
    <>
      <div id="masagesSection">

        <div className="masageHeader">
          <h1>Current user info</h1>
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
            <Button variant="contained" endIcon={<IoSend />}>Send</Button>
          </div>
           
        </div>

      </div>
      
    </>
  )
}

export default Masages
