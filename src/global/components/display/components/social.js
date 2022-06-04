import React, { useState, useEffect } from 'react'
import s from './social.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Codepen } from '../../../../global/assets/SVGs/codepen.svg'
import { ReactComponent as Github } from '../../../../global/assets/SVGs/github.svg'
import { ReactComponent as Twitter } from '../../../../global/assets/SVGs/twitter.svg'
import useSound from 'use-sound'
import bounce from '../../../../global/assets/sounds/bounce.wav'
import unfa from '../../../../global/assets/sounds/unfa_select.flac'
import useWindowDimensions from '../../../hooks/useWindowDimensions'

export default function Social() {
  const ini = { pixels: '270px', degrees: '0deg' }
  const [pixels, setPixels] = useState(ini.pixels)
  const [degrees, setDegrees] = useState(ini.degrees)
  const { windowWidth } = useWindowDimensions()
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [playSound] = useSound(bounce, { volume: 0.5, playbackRate: 2 })
  const [playSoundTwo] = useSound(unfa)
  const links = {
    SO: `https://stackoverflow.com/users/14895985/gass?tab=profile`,
    github: `https://github.com/gass-git`,
    twitter: `https://twitter.com/gass_tweets`,
    sandbox: `https://codesandbox.io/u/g.szada`
  }

  /**
   * This state is used to wait the transition off 200ms
   * of the collapse movement of the social accordion.
   * 
   * For the useEffect(). So that it will not execute
   * the collapse() function until the transition has eneded.
   */
  const [inTransition, setInTransition] = useState(false)

  const expand = () => {
    setDegrees(ini.degrees)
    setPixels(ini.pixels)
    setIsCollapsed(false)
  }

  const collapse = () => {
    setDegrees('180deg')
    setPixels('33px')
    setInTransition(true)
    setTimeout(() => {
      setIsCollapsed(true)
      setInTransition(false)
    }, 200)
  }

  useEffect(() => {
    if (windowWidth < 600 && !isCollapsed && !inTransition) collapse()
    else if (windowWidth >= 600 && isCollapsed) expand()
  }, [windowWidth])

  function goto(site) {
    window.open(links[site], '_blank')
    playSoundTwo()
  }

  function handleClick() {
    playSound()
    if (pixels !== ini.pixels) expand()
    else collapse()
  }

  return (
    <div
      className={s.social}
      style={{ width: `${pixels}` }}
    >
      <div
        className={s.button_box}
        onClick={() => handleClick()}
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
          onClick={() => goto(`github`)}
        />
        <FontAwesomeIcon
          icon={faStackOverflow}
          id={s.stack}
          onClick={() => goto(`SO`)}
        />
        <Twitter
          id={s.twitter}
          onClick={() => goto(`twitter`)}
        />
        <Codepen
          id={s.codepen}
          onClick={() => goto(`sandbox`)}
        />
      </div>
    </div>
  )
}
