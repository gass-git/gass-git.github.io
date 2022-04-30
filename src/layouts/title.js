import React from 'react'

export default function Title({ title }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
      <div className='title-1'>
        {title}
      </div>
    </div>
  )
}
