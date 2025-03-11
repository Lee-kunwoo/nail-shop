import React from 'react'
import '../styles/style.scss'

const Head = () => {
  return (
  <div className='headoutbox'>
  <div className="logo" style={{ backgroundImage: `url(${'https://raw.githubusercontent.com/Lee-kunwoo/nailart/refs/heads/main/images/Logo_resized.webp'})` }}></div>
    <div className="topLogo">JunwonNailArt</div>  
    <div className='message'>정원네일아트는 고객과의 만남을 소중히 합니다.</div>
  </div>  
  )
}

export default Head;