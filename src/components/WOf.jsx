import React from 'react'
import ko from "../assets/ko.mp4"

function WOf() {
  return (
    <div className='  bg-black'>
       <video
           autoPlay
           muted
           loop
          
           
           className="w-auto h-auto object-contain bg-red-800"
         >
           <source src={ko} type="video/mp4" />
         </video>

     

    </div>
  )
}

export default WOf