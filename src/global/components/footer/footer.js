import React from 'react'
import s from './footer.module.css'

export default function Footer() {
  const link = 'https://github.com/gass-git'

  return (
    <section id={s.footer}>
      <p>© Designed & built by {' '}
        <span onClick={() => window.open(link, '_blank')}>
          Gass
        </span>
      </p>
    </section>
  )
}
