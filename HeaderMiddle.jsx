import React from 'react'
import {BiBook} from "react-icons/bi";
import {GrFormSearch} from "react-icons/gr";
import {BsCart} from 'react-icons/bs';

const HeaderMiddle = () => {
  return (
    <div className="header-middle">
    <div className="header-logo">
      <div className="content">
      <b>Hamro</b>
      <BiBook/>
      <b>Kitab</b>
      </div>
    </div>
    <div className="header-middle-search-box">
      <input className='header-middle-search-input' type="Search" placeholder='Search Books'/>
      <GrFormSearch className='search'/>
    </div>
    <div className="header-middle-cart-wrapper">
      <BsCart className='cart'/>
    </div>
  </div>
  )
}

export default HeaderMiddle;