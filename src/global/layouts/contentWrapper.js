import React from 'react'
import s from './contentWrapper.module.css'

export default function ContentWrapper({ element }) {
  return (
    <section id={s.content_wrapper}>
      {element}
    </section>
  )
}

