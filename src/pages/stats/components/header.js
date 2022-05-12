import React from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDev, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <section id={s.header} >
      <div className={s.bottom_box}>

        <div className={s.icons_wrapper}>
          <div className={s.selected}>
            <FontAwesomeIcon icon={faStackOverflow} />
          </div>
          <div>
            <FontAwesomeIcon icon={faDev} />
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </div>
    </section>
  )
}