import { Button, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { CiMenuKebab } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Userlist from '../../component/home/Userlist';
import Friends from '../../component/home/Friends';


const HomePage = () => {

    const db = getDatabase();
    let [userList , setUserlist] = useState([]); 

     

     useEffect(
      ()=>{
        const userRef = ref(db , 'users');
        onValue(
          userRef , (snapshoot)=>{
            let ourUser = []
            snapshoot.forEach(
              (item)=>{
                ourUser.push({...item.val(),id:item.key})
              }
            )
            setUserlist(ourUser)
            console.log(ourUser);
          }
        )
      },[]
     )
     console.log(userList);

  
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
                    <Button variant="contained" className='myBtn'>Add Friend</Button>
                    {/* <Button variant="contained" className='myBtn'>Add Friend</Button> */}
                    </div>
                  </div>
                </div>
                
              ))
            }
            
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

          <Friends/>

        </div>
      </div>
      <Userlist/>
    </>
  )
}

export default HomePage
