import React from 'react'

const Items = ({name, src}) => {
  return (
    <>
    <img src={src} alt={name}/>
    <p>{name}</p>
    </>
  )
}

export default Items;