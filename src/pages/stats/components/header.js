import React, { useState } from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faDev, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'
import clickStereo from '../../../global/assets/sounds/click_stereo.wav'
import useSound from 'use-sound'

export default function Header() {
  const ini = { pixels: '0px', degrees: '180deg' }
  const [pixels, setPixels] = useState(ini.pixels)
  const [degrees, setDegrees] = useState(ini.degrees)
  const [playSound] = useSound(clickStereo)

  function expand() {

    playSound()

    if (pixels !== ini.pixels) {
      setPixels(ini.pixels)
      setDegrees(ini.degrees)
    }
    else {
      setPixels('150px')
      setDegrees('0deg')
    }
  }

  return (
    <section id={s.header}>
      <div
        className={s.movable_box}
        style={{ transform: `translateX(${pixels})` }}
      >

        <div className={s.tab}>
          <FontAwesomeIcon
            style={{
              fontSize: '60px',
              transition: '500ms',
              transform: `rotate(${degrees})`
            }}
            icon={faAngleLeft}
            onClick={() => expand()}
          />
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
    </section >
  )
}