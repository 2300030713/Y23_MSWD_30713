import React from 'react'
import klulogo from  './klulogo.jpg';

const Header = () => {
  return (
    <div class="header">
     <img src={klulogo} alt="KL University Logo" />
     <h1>KL University</h1>
    </div>
  )
}

export default Header
