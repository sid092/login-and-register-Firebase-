import React from 'react'
import './Widget.css'
import Poster2 from '../Assets/poster2.png'
import Poster3 from '../Assets/poster3.png'
import Logo2 from '../Assets/logo2.png'
import Logo3 from '../Assets/logo3.png'

const Widget = () => {
  return (
    <>
      <div className='heading'>
        <p>Artists</p>
        <p className='para2'>Photographers</p>
      </div>
      <div className='poster2'>
        <img src={Poster2} alt="Poster2" />
      </div>
      <div className='logo2'>
        <img src={Logo2} alt="Logo2" />
        <p>Thomas Edward</p>
      </div>
      <div className='poster2'>
        <img src={Poster3} alt="Poster2" />
      </div>
      <div className='logo2'>
        <img src={Logo3} alt="Logo2" />
        <p>Chris Doe</p>
      </div>
      <div className='poster2'>
        <img src={Poster2} alt="Poster2" />
      </div>
      <div className='logo2'>
        <img src={Logo2} alt="Logo2" />
        <p>Thomas Edward</p>
      </div>
    </>
  )
}

export default Widget
