import { Alert, Button } from "@mui/material";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import React, { useEffect, useState } from 'react'
import { BsDisplay } from "react-icons/bs";
import { useSelector } from "react-redux";


const SentRequest = () => {

    const db = getDatabase();
    const loggdata  = useSelector((state) => state.loggedinUderData.value);
    const [sentReq , setSentReq] = useState([])

    useEffect(
        ()=>{
          const sentReqRef = ref(db , 'frndRequest');
          onValue(
            sentReqRef , (snapshoot)=>{
              let ourUser = []
              snapshoot.forEach(
                (item)=>{
                  if(item.val().senderUid == loggdata.uid){
                    ourUser.push({...item.val(),id:item.key})
                    // console.log(item.val().senderUid);
                  }
                  
                }
              )
              setSentReq(ourUser);
            }
          )
        },[]
       );
    //    console.log(sentReq);

    let handleSentReqCancel =(item)=>{
        console.log(item.id);
        remove(ref(db, "frndRequest/" + item.id)).then(()=>{console.log("delete");})
    }

  return (
    <div>
      <h3>sent request</h3>
      <div>
        {
          sentReq.length > 0
          ?
            sentReq.map((item ,index)=>(
                
                <div key={index} style={{display:'flex', gap: "40px", margin:"10px"}}>
                    <div>
                        <p>{item.receverUserName}</p>
                        <p>{item.receverEmail}</p>
                    </div>
                    <div>
                    <Button onClick={()=>handleSentReqCancel(item)} variant="contained">Cancel</Button>
                    </div>
                </div>
               
            ))
            :
            <Alert severity="info">No Request Found.</Alert>
        }
      </div>
    </div>
  )
}

export default SentRequest
