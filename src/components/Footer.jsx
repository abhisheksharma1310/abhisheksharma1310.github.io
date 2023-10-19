import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear();
  
  return (
    <footer className='flex-col flex-center'>
      <p>Abhishek Sharma ©️ {year}</p>
    </footer>
  )
}

export default Footer