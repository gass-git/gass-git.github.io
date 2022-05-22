import React from 'react'
import s from './display.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow, faDev } from '@fortawesome/free-brands-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Codepen } from '../../../global/assets/SVGs/codepen.svg'
import { ReactComponent as Github } from '../../../global/assets/SVGs/github.svg'
import { ReactComponent as Twitter } from '../../../global/assets/SVGs/twitter.svg'

export default function Display() {
  return (
    <section id={s.display}>

      <div className={s.brand}>
        G
      </div>

      <div className={s.screen}>

        <div className={s.social}>
          <div className={s.button_box}>
            <FontAwesomeIcon icon={faCaretRight} id={s.arrow} />
          </div>
          <div className={s.icons_wrapper}>
            <Github id={s.git} />
            <FontAwesomeIcon icon={faStackOverflow} id={s.stack} />
            <Twitter id={s.twitter} />
            <Codepen id={s.codepen} />
          </div>
        </div>

        <div className={s.msg_display}>
          <div className={s.scroll_text}>
            message test
          </div>
        </div>

      </div>

    </section>
  )
}
