import React from 'react'
import { AiFillChrome, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 QH Developpement</p>
      <p className='icons'>
        <AiFillGithub className='icons-network' onClick={() => {window.open('https://github.com/QuentinHou')}} />
        <AiFillChrome className='icons-network' onClick={() => {window.open('')}}/>
        <AiFillLinkedin className='icons-network' onClick={() => {window.open('https://www.linkedin.com/in/quentin-hourcadette-72619421a/')}}/>
      </p>
    </div>
  )
}

export default Footer
