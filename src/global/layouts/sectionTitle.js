import React from 'react'
import s from './sectionTitle.module.css'

export default function SectionTitle({ txt1, txt2 }) {
  return (
    <section id={s.section_title}>
      <div className={s.wrapper}>
        <div className={s.text_style_one}>
          {txt1}
        </div>

        <div className={s.text_style_two}>
          {txt2}
        </div>
      </div>
    </section>
  )
}