import React from 'react'
import s from './styles.module.css'

export default function SectionHeader({ SVG, title }) {
  return (
    <section id={s.header}>
      <div className={s.icon}>
        {SVG}
      </div>
      <div className={s.title}>
        {title}
      </div>
    </section>
  )
}