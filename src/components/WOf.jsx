import React from 'react'
import ok from "../assets/ok.webm"

function WOf() {
  return (
    <div className="bg-black overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-auto object-cover"
      >
        <source src={ok} type="video/webm" />
      </video>
    </div>
  )
}

export default WOf