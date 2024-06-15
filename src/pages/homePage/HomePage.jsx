import { Button, styled } from '@mui/material'
import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Userlist from '../../component/home/Userlist';


const HomePage = () => {
   let myarr= [1,2,3,4,5,6]
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
            {/* {
              myarr.map(items=>
                
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
                        
                        </div>
                      </div>
                    </div>
                  </li>
                
              )
            } */}
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
              
            </ul>
          </div>

        </div>
      </div>
      <Userlist/>
    </>
  )
}

export default HomePage
