import React from 'react'
import s from './subtitle.module.css'

export default function Subtitle() {
  return (
    <section id={s.subtitle}>
      <div className={s.title_wrapper}>
        <div className={s.text_style_one}>
          Pinned
        </div>

        <div className={s.text_style_two}>
          projects things I've built
        </div>
      </div>
    </section>
  )
}
