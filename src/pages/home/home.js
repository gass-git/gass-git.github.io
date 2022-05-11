import React from 'react'
import mario from '../../global/assets/images/cyberpunk_1.webp'
import s from './home.module.css'

export default function Latest({ latest }) {

  if (!latest) return <div>Loading</div>

  return (
    <section id={s.home}>
      <div className={s.image_wrapper}
        style={{ backgroundImage: `url(${mario})` }}
      >

      </div>
    </section>
  )
}
