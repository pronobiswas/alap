import { Button, styled } from '@mui/material'
import React from 'react'


const HomePage = () => {
  return (
    <>
      <div id="homepage">
        <div className="content_warpper">
          <div className="allUser contentbox">
            <h3>User List</h3>
            <ul>
              <li>
                <div className="userThumb">
                  <div className="userIcon">
                    <div className="myAvatar">a</div>
                  </div>
                  <div className="uesrDes">
                    <h4>Prnob Biswas</h4>
                    <p>webdesignerAndDeveloper</p>
                  </div>
                  <div className="usersFeature">
                    <div className="frndBtnWarper">
                    <Button variant="contained" className='myBtn'>Add Friend</Button>
                    {/* <Button variant="contained" className='myBtn'>Add Friend</Button> */}
                    </div>
                  </div>
                </div>
              </li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ul>
          </div>
          <div className="friendlist contentbox">
            
          </div>
          <div className="friendRequest contentbox">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
