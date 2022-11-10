import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button className='boton' onClick={onClick}>{text}</button>
  )
}

export default Button