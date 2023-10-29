import React from 'react'
import './Content.css'
import logo from '../Assets/logo.png'
import poster1 from '../Assets/poster1.png'
import { AiOutlineHeart,AiOutlineShareAlt} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
const Content = () => {
  return (
    <>
    <div className='content'>
        <div className = 'title'>
        <img src={logo} alt="Logo" /> 
        <h3>Lara Leones</h3>
        </div>
        <div className='userName'>
          <h6>@laraleones</h6>
        </div>
        <div className='text'>
          <p>It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. <span className='span'>Read More</span>
          </p>
        </div>
        <div className='poster'>
        <img src={poster1} alt="poster1" /> 
        </div>
        <div className='icons'>
          <AiOutlineHeart/>
          <p>9.8k</p>
          <FaRegComment/>
          <p>8.6k</p>
          <AiOutlineShareAlt/>
          <p>7.2k</p>
        </div>
    </div>
    </>
  )
}

export default Content
