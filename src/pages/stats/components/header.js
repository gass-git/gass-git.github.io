import React from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDev, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'
import cyberpunk from '../../../global/assets/images/cyberpunk_7.gif'

export default function Header() {
  return (
    <>
      <div className={s.header} style={{
        backgroundImage: `url(${cyberpunk})`
      }}>
        <div className={s.left_box}>

        </div>
        <div className={s.right_box}>
          <div className={s.about}>
            <div className={s.label}>
              Active on
            </div>
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
        </div>
      </div>
    </>
  )
}