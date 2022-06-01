import React, { useState } from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import clickStereo from '../../../global/assets/sounds/click_stereo.wav'
import useSound from 'use-sound'

export default function Header({ latestArticle }) {
  const ini = { pixels: '0px', degrees: '180deg' }
  const [pixels, setPixels] = useState(ini.pixels)
  const [degrees, setDegrees] = useState(ini.degrees)
  const [playSound] = useSound(clickStereo, { volume: 0.4 })

  function expand() {
    playSound()

    if (pixels !== ini.pixels) {
      setPixels(ini.pixels)
      setDegrees(ini.degrees)
    }
    else {
      setPixels('440px')
      setDegrees('0deg')
    }
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
                LATEST
              </p>
              <FontAwesomeIcon
                className='animated-arrow'
                style={{ transform: `rotate(${degrees})` }}
                icon={faAngleLeft}
                onClick={() => expand()}
              />
            </div>
            <div
              className={s.content_wrapper}
              onClick={() => window.open(latestArticle.url, '_blank')}
            >
              <div className={s.title}>
                {latestArticle.title}
              </div>
              <div className={s.sentence}>
                {latestArticle.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




