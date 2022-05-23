import React, { useState, useCallback, Fragment } from 'react'
import s from './display.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow, faDev } from '@fortawesome/free-brands-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Codepen } from '../../../global/assets/SVGs/codepen.svg'
import { ReactComponent as Github } from '../../../global/assets/SVGs/github.svg'
import { ReactComponent as Twitter } from '../../../global/assets/SVGs/twitter.svg'
import useSound from 'use-sound'
import bounce from '../../../global/assets/sounds/bounce.wav'
import unfa from '../../../global/assets/sounds/unfa_select.flac'
import { useEffect } from 'react'


export default function Display({ msgIndex, scrollOn }) {
  const ini = { pixels: '270px', degrees: '0deg' }
  const [pixels, setPixels] = useState(ini.pixels)
  const [degrees, setDegrees] = useState(ini.degrees)
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [playSound] = useSound(bounce, { volume: 0.5, playbackRate: 2 })
  const [playSoundTwo] = useSound(unfa)

  const links = {
    SO: `https://stackoverflow.com/users/14895985/gass?tab=profile`,
    github: `https://github.com/gass-git`,
    twitter: `https://twitter.com/gass_tweets`,
    sandbox: `https://codesandbox.io/u/g.szada`
  }
  const messages = [
    <Fragment>
      Welcome fellow visitor! I'm glad you came by, feel free to take a look around...
    </Fragment>,
    <Fragment>
      Last Github commit - Made some changes to arrow_box styles
    </Fragment>,
    <Fragment>
      Last blog post - One of my favourite JS challenges on Stack Overflow
    </Fragment>
  ]

  function expand() {
    if (pixels !== ini.pixels) {
      playSound()
      setDegrees(ini.degrees)
      setPixels(ini.pixels)
      setIsCollapsed(false)
    }
    else {
      playSound()
      setDegrees('180deg')
      setPixels('33px')
      setTimeout(() => setIsCollapsed(true), 200)
    }
  }

  function handleClick(site) {
    window.open(links[site], '_blank')
    playSoundTwo()
  }

  return (
    <section id={s.display}>

      <div className={s.brand}>
        G
      </div>

      <div className={s.screen}>
        <div
          className={s.social}
          style={{ width: `${pixels}` }}
        >
          <div
            className={s.button_box}
            onClick={() => expand()}
          >
            <FontAwesomeIcon
              icon={faCaretRight}
              id={s.arrow}
              style={{ transform: `rotate(${degrees})` }}
            />
          </div>
          <div
            className={s.icons_wrapper}
            style={isCollapsed ? { display: `none` } : null}
          >
            <Github
              id={s.git}
              onClick={() => handleClick(`github`)}
            />
            <FontAwesomeIcon
              icon={faStackOverflow}
              id={s.stack}
              onClick={() => handleClick(`SO`)}
            />
            <Twitter
              id={s.twitter}
              onClick={() => handleClick(`twitter`)}
            />
            <Codepen
              id={s.codepen}
              onClick={() => handleClick(`sandbox`)}
            />
          </div>
        </div>

        <div className={s.msg_display}>
          {
            scrollOn ?
              <div className={s.scroll_text}>
                {messages[msgIndex]}
              </div>
              :
              null
          }
        </div>

      </div>

    </section>
  )
}
