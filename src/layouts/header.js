import React from 'react'
import s from './styles.module.css'

export default function Header({ SVG, title, about }) {
  return (
    <section id={s.header}>
      <div className={s.left_box}>
        {SVG}
      </div>
      <div className={s.right_box}>
        <div className={s.title}>
          {title}
        </div>
        <div className={s.about}>
          {about}
        </div>
      </div>
    </section >
  )
}
