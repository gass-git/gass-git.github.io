import React, { useState } from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import clickStereo from '../../../global/assets/sounds/click_stereo.wav'
import useSound from 'use-sound'

export default function Header() {
  const ini = { pixels: '-580px', degrees: '0deg' }
  const [pixels, setPixels] = useState(ini.pixels)
  const [degrees, setDegrees] = useState(ini.degrees)

  const [playSound] = useSound(clickStereo, { volume: 0.9 })

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
    <section id={s.header}>
      <div
        className={s.movable_box}
        style={{ transform: `translateX(${pixels})` }}
      >
        <div
          className={s.content_wrapper}
        >
          <p>
            Hey there! welcome to my site, this is the place where I like to share articles I've written,
            projects I've developed and other stuff.
          </p>
          <p>
            If you don't know me I'll tell you a bit about myself...
          </p>
          <p>
            I started playing around with code since my teens. Mainly related
            to web development. I've
            always been fascinated by been able to portray an idea into reality
            and share it with the world. There are
            probably many developers that share this same feeling.
          </p>
          My two main interests in life are programming and the outdoors. When I'm not
          programming I may be doing some sport or lost in nature.
          <p>
            By the way, I don't smoke...
          </p>
        </div>

        <div className={s.tab}>
          <p
            className={s.vertical_text}
            onClick={() => expand()}
          >
            ABOUT
          </p>
          <FontAwesomeIcon
            style={{
              fontSize: '60px',
              transition: '500ms',
              transform: `rotate(${degrees})`
            }}
            icon={faAngleRight}
            onClick={() => expand()}
          />
        </div>

      </div>
    </section>
  )
}
