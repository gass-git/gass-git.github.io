import React from 'react'
import s from './sectionTitle.module.css'

export default function SectionTitle({ svg, title }) {
  return (
    <section id={s.section_title}>
      <div className={s.svg_box}>
        {svg}
      </div>
      <div className={s.short_middle_line} />
      <div className={s.title}>
        {title}
      </div>
      <div className={s.middle_line} />
    </section>
  )
}
