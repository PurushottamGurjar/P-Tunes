import React from 'react'
import "./app.css"
import HeaderLogoBar from './components/HeaderLogoBar'
import LeftSideBar from './components/leftSideBar'
import RightContent from './components/RightContent'


const App = () => {
  return (
    <div>
      <div className="fullcontent">
        <div className="headerlogobar">
          <HeaderLogoBar/>
        </div>
        
        <div className="body">
          <div className="leftbar">
          <LeftSideBar/>
          </div>

          <div className="rightcontent">
            <RightContent/>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default App
