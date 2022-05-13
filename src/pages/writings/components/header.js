import React, { useState } from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function Header({ latestArticle }) {
  const ini = { pixels: '0px', degrees: '180deg' }
  const [pixels, setPixels] = useState(ini.pixels)
  const [degrees, setDegrees] = useState(ini.degrees)

  function expand() {
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
      <div
        className={s.movable_box}
        style={{ transform: `translateX(${pixels})` }}
      >

        <div className={s.tab}>
          <p
            className={s.vertical_text}
            onClick={() => expand()}
          >
            LATEST
          </p>
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
    </section>
  )
}




