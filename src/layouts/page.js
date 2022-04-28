import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Page({ title, icon }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <FontAwesomeIcon
        icon={icon}
        style={{ fontSize: '80px', color: '#ddd', margin: '20px 0 20px 0' }}
      />
      <div className='title-1'>
        {title}
      </div>
    </div>
  )
}
