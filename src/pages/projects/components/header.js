import React, { useState } from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const ini = { pixels: '220px', degrees: '0deg' }
  const [pixels, setPixels] = useState(ini.pixels)
  const [degrees, setDegrees] = useState(ini.degrees)

  function expand() {
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
          className={s.arrow_wrapper}
          style={{ transform: `rotate(${degrees})` }}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={() => expand()}
          />
        </div>
        <div
          className={s.content_wrapper}
        >
          <p>
            I'm constantly building projects related to web development.
          </p>
          <p>
            Feel free to have a look around and check them out!
          </p>
        </div>
      </div>
    </section>
  )
}



