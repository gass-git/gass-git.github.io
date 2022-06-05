import React, { useState } from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import clickStereo from '../../../global/assets/sounds/click_stereo.wav'
import useSound from 'use-sound'
import headerImage from '../../../global/assets/images/CP_writings.gif'

export default function Header({ latestArticle }) {
  const ini = { pixels: '0px', degrees: '180deg' }
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
      setPixels('440px')
      setDegrees('0deg')
    }
  }

  return (
    <section id={s.header} data-aos='flip-up' data-aos-duration='500'>
      <div 
      className={s.wrapper}
      style={{backgroundImage: `url(${headerImage})`}}
      onLoad={console.log('writings image loaded')}
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
                LATEST
              </p>
              <FontAwesomeIcon
                className='animated_arrow'
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




