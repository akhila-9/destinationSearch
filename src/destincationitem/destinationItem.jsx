import React from 'react'
import "./destinationItem.css"

const DestinationItem = ({details}) => {
    console.log(details);
  return (
    
    <div>
    <img src={details.imgUrl} className='imgstyles'/>
    <div>{details.name}</div>
    
  </div>
  )
}

export default DestinationItem
