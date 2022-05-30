import React, { useState, useEffect, Fragment, useContext } from 'react'
import s from './display.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Codepen } from '../../../global/assets/SVGs/codepen.svg'
import { ReactComponent as Github } from '../../../global/assets/SVGs/github.svg'
import { ReactComponent as Twitter } from '../../../global/assets/SVGs/twitter.svg'
import useSound from 'use-sound'
import bounce from '../../../global/assets/sounds/bounce.wav'
import unfa from '../../../global/assets/sounds/unfa_select.flac'
import { AppContext } from '../../../App'

export default function Display() {
  const { state, dispatch } = useContext(AppContext)
  const {
    uniqueVisits,
    guestLocation,
    scrollerSwitch,
    scrollerMsgIndex,
    latestArticle,
    SO_latestAnswer,
    latestCommit
  } = state

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
      Welcome fellow visitor from {guestLocation ? guestLocation : 'unknown'}!
    </Fragment>,
    <Fragment>
      Unique visitors to date: {uniqueVisits} and counting...
    </Fragment>,
    <Fragment>
      Last blog post on DevTo - {latestArticle}
    </Fragment>,
    <Fragment>
      Latest on Stack Overflow - {SO_latestAnswer}
    </Fragment>,
    <Fragment>
      Latest GitHub commit - {latestCommit.comment} (repo: {latestCommit.repo})
    </Fragment>,
    <Fragment>
      Credits: FontAwesome, SVG Backgrounds, Axios, useSound and the artists behind the cyberpunk gifs..
    </Fragment>
  ]

  useEffect(() => {
    dispatch({
      type: 'set scroll messages count',
      total: messages.length
    })
  }, [dispatch, messages.length])

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
            scrollerSwitch === 'on' ?
              <div className={s.scroll_text}>
                {messages[scrollerMsgIndex]}
              </div>
              :
              null
          }
        </div>

      </div>

    </section>
  )
}
