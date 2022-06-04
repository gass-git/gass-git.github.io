import React from 'react'
import s from './contentWrapper.module.css'

export default function ContentWrapper({ children }) {
  return (
    <section id={s.content_wrapper}>
      {children}
    </section>
  )
}

