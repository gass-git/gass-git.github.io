import React from 'react'
import { ReactComponent as Developer } from '../../assets/SVGs/developer.svg'

export default function Latest({ latest }) {
  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <div>
        <Developer />
      </div>
      <div style={{ marginTop: '15px' }}>
        <h1 style={{ color: 'rgb(70, 201, 70)' }}>Hey there! 👋</h1>
        <div style={{ color: '#ddd', marginRight: '20px' }}>
          Welcome to my virtual space. I'm a programmer specializing in web development.
          Here is where I share my latest activity online.
          I like to think about this section as the eye of a cyclone, the place
          where all my activity online it's summarized in a single point.
        </div>
      </div>
    </div>
  )
}
