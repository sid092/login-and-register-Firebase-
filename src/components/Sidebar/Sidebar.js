import React from 'react'
import './Sidebar.css';
import {AiFillHome ,AiFillNotification , AiOutlineShoppingCart,AiOutlineWallet ,AiOutlineProfile,AiOutlineSetting} from "react-icons/ai";
import { BiConversation ,BiLogOut } from "react-icons/bi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate = useNavigate();
  function logout(e){
    navigate('/');
  }
  return (
       <div className="sidebar">
      <ul>
        <li><AiFillHome/>  Home</li>
        <li><AiFillNotification/> Notifications</li>
        <li><AiOutlineShoppingCart/> Shop</li>
        <li><BiConversation/> Conversations</li>
        <li><AiOutlineWallet/> wallet</li>
        <li><MdOutlineSubscriptions/> subscription</li>
        <li><AiOutlineProfile/> My profile</li>
        <li><AiOutlineSetting/> Settings</li>
        <li onClick={logout}><BiLogOut/> Log out</li>
      </ul>
    </div>
  )
}

export default Sidebar
