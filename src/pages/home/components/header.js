import React, { useState } from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import clickStereo from '../../../global/assets/sounds/click_stereo.wav'
import useSound from 'use-sound'

export default function Header() {
  const ini = { pixels: '-490px', degrees: '0deg' }
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

  function AboutMe() {
    return (
      <>
        <p>
          Hey there! welcome to my site. Here is where I share articles I've written,
          projects I've developed and other stuff.
        </p>
        <p>
          <span className='green'>A bit about me:</span> I started playing around with code since my teens. Mainly related
          to web development. I've always been fascinated by portraying an idea into reality
          and sharing it with the world. There are
          probably many developers that share this same feeling.
        </p>
        <p>
          When I'm not programming I'm likely playing sports, sharing time
          with friends/family or inmersed in nature.
        </p>
      </>
    )
  }

  return (
    <section id={s.header}>
      <div className={s.wrapper}>
        <div className={s.glass}>
          <div
            className={s.movable_box}
            style={{ transform: `translateX(${pixels})` }}
          >
            <div className={s.content}>
              <AboutMe />
            </div>

            <div className='tab'>
              <p
                className='vertical_text'
                onClick={() => expand()}
              >
                ABOUT
              </p>

              <FontAwesomeIcon
                icon={faAngleRight}
                className='animated-arrow'
                style={{ transform: `rotate(${degrees})` }}
                onClick={() => expand()}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
