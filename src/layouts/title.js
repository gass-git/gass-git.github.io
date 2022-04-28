import React from 'react'

export default function Title({ pageName }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
      <div className='title-1'>
        {pageName}
      </div>
    </div>
  )
}
