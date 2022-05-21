import React from 'react'
import s from './display.module.css'

export default function Display() {
  return (
    <section id={s.display}>

      <div className={s.brand}>
        G
      </div>

      <div className={s.screen}>
        <div className={s.msg_display}>
          <div className={s.scroll_text}>
            message test
          </div>
        </div>
      </div>

    </section>
  )
}
