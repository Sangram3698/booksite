import React from 'react'
import {BsList} from 'react-icons/bs';
import {BsFillPersonFill} from 'react-icons/bs';
import {BsFillTelephoneFill} from "react-icons/bs";
import {RxCross1} from "react-icons/rx"

const HeaderTop = ({setToggle,toggle}) => {
  return (
    <div className="header-top">
    <div className="header-top-menu" onClick={()=>setToggle(prev=>!prev)} >
      {toggle?<RxCross1/>:<BsList/>}
    
    </div>
    <div className="header-top-phone">
      <BsFillTelephoneFill className='phone'/>
          9800000000
    </div>
    <div className="header-top-text">
      Welcome to HamroKitab
    </div>
    <div className="header-top-link">
      <BsFillPersonFill/>
      Login
    </div>
  </div>
  )
}

export default HeaderTop;