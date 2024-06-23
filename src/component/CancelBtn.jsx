import { Button } from '@mui/material'
import React from 'react'

const CancelBtn = ({cancelItem}) => {
    let handleCancel =(item)=>{
        console.log(item);
    }
  return (
    <div>
      <Button onClick={()=>handleCancel({cancelItem})} variant="contained">Cancel</Button>
    </div>
  )
}

export default CancelBtn
