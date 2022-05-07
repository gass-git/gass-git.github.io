import React from 'react'
import s from './tornadoBtn.module.css'

export default function TornadoBtn({ svg, text }) {
  return (
    <div className={s.wrapper}>
      <span id={s.one}>{svg}</span>
      <span id={s.two}>{text}</span>
    </div>
  )
}
