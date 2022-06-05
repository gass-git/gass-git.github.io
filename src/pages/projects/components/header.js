import React, { useState } from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import clickStereo from '../../../global/assets/sounds/click_stereo.wav'
import useSound from 'use-sound'

export default function Header({ gif }) {
  const ini = { pixels: '240px', degrees: '0deg' }
  const [pixels, setPixels] = useState(ini.pixels)
  const [degrees, setDegrees] = useState(ini.degrees)
  const [playSound] = useSound(clickStereo, { volume: 0.5 })

  function expand() {

    playSound()

    if (pixels !== ini.pixels) {
      setPixels(ini.pixels)
      setDegrees(ini.degrees)
    }
    else {
      setPixels('0px')
      setDegrees('180deg')
    }
  }

  return (
    <section id={s.header} data-aos='flip-up' data-aos-duration='500'>
      <div
        className={s.wrapper}
        style={{ backgroundImage: `url(${gif})` }}
      >
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
                ABOUT
              </p>
              <FontAwesomeIcon
                style={{
                  fontSize: '45px',
                  transition: '500ms',
                  transform: `rotate(${degrees})`
                }}
                icon={faAngleLeft}
                onClick={() => expand()}
              />
            </div>

            <div className={s.content_wrapper}>
              <p>
                I'm constantly building projects related to web development.
              </p>
              <p>
                Feel free to have a look around and check them out!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}



