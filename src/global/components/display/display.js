import React, { useEffect, Fragment, useContext } from 'react'
import s from './display.module.css'
import { AppContext } from '../../../App'
import Social from './components/social'
import Logo from './components/logo'

export default function Display() {
  const { state, dispatch } = useContext(AppContext)
  const {
    uniqueVisits,
    guestLocation,
    scrollerSwitch,
    scrollerMsgIndex,
    latestArticle,
    SO_latestAnswer,
    latestCommit,
    appMuted
  } = state

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
      Thanks to: FontAwesome, SVG Backgrounds, Axios, AOS, React, useSound hook and the artists behind the cyberpunk gifs..
    </Fragment>
  ]

  // Reset the scrollerSwitch when the scrollerMsgIndex changes
  useEffect(()=> {
    dispatch({ type: 'set scroller off' })
    setTimeout(() => {
      dispatch({ type: 'set scroller on' })
    },500)
  }, [scrollerMsgIndex])

  return (
    <section id={s.display}>
      <Logo dispatch={dispatch} appMuted={appMuted}/>

      <div className={s.screen}>
        <Social appMuted={appMuted}/>

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
