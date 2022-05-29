import React, { useState } from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faDev, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'
import clickStereo from '../../../global/assets/sounds/click_stereo.wav'
import techSound from '../../../global/assets/sounds/unfa_select.flac'
import useSound from 'use-sound'

export default function Header({ current, setCurrent }) {
  const ini = { pixels: '0px', degrees: '180deg' }
  const [pixels, setPixels] = useState(ini.pixels)
  const [degrees, setDegrees] = useState(ini.degrees)
  const [expandSound] = useSound(clickStereo, { volume: 0.9 })
  const [switchSound] = useSound(techSound, { volume: 0.5 })

  function expand() {
    expandSound()

    if (pixels !== ini.pixels) {
      setPixels(ini.pixels)
      setDegrees(ini.degrees)
    }
    else {
      setPixels('150px')
      setDegrees('0deg')
    }
  }

  function updateCurrent(selected) {
    switchSound()
    setCurrent(selected)
  }

  return (
    <section id={s.header}>
      <div className={s.wrapper}>
        <div className={s.glass}>
          <div
            className={s.movable_box}
            style={{ transform: `translateX(${pixels})` }}
          >

            <div className='tab'>
              <p
                className='vertical_text'
                onClick={() => expand()}
              >
                select
              </p>
              <FontAwesomeIcon
                className='animated-arrow'
                style={{ transform: `rotate(${degrees})` }}
                icon={faAngleLeft}
                onClick={() => expand()}
              />
            </div>

            <div className={s.icons_wrapper}>
              <div
                className={current === 'stack overflow' ? s.selected : s.transparent_border}
                onClick={() => updateCurrent('stack overflow')}
              >
                <FontAwesomeIcon icon={faStackOverflow} />
              </div>
              <div
                className={current === 'devto' ? s.selected : s.transparent_border}
                onClick={() => updateCurrent('devto')}
              >
                <FontAwesomeIcon icon={faDev} />
              </div>
              <div
                className={current === 'github' ? s.selected : s.transparent_border}
                onClick={() => updateCurrent('github')}
              >
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}