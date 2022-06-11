import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import s from './navbar.module.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import LeftBox from './children/leftBox'
import RightBox from './children/rightBox'
import MovableContainer from './children/movableContainer'
import { handleTranslationStates, handleArrowsState, movableLineClass } from './functions'
import { AppContext } from '../../../App'

export default function Navbar() {
  const { state, dispatch } = useContext(AppContext)
  const { selected, appMuted } = state

  const { windowWidth } = useWindowDimensions()
  const [showArrows, setShowArrows] = useState(false)
  const [translatedX, setTranslatedX] = useState(0)
  const [translationWidth, setTranslationWidth] = useState(0)
  const [isActive, setIsActive] = useState({ left: false, right: false })
  const [hiddenItems, setHiddenItems] = useState({ left: 0, right: 0 })
  const links = ['home', 'projects', 'writings', 'stats']

  useEffect(() => {
    // reset the translation on the X axis every time the window width changes
    setTranslatedX(0)
    handleArrowsState({ windowWidth, setShowArrows, setIsActive })
    handleTranslationStates({ windowWidth, setHiddenItems, setTranslationWidth })
  }, [windowWidth])

  function moveRight() {
    if (!isActive.left) setIsActive({ ...isActive, left: true })

    if (hiddenItems.right > 1) {
      setHiddenItems({ left: hiddenItems.left + 1, right: hiddenItems.right - 1 })
      setTranslatedX(translatedX + translationWidth)
    }
    else if (hiddenItems.right === 1) {
      setHiddenItems({ left: hiddenItems.left + 1, right: 0 })
      setTranslatedX(translatedX + translationWidth)
      setIsActive({ right: false, left: true })
    }
  }

  function moveLeft() {
    if (!isActive.right) setIsActive({ ...isActive, right: true })

    if (hiddenItems.left > 1) {
      setHiddenItems({ left: hiddenItems.left - 1, right: hiddenItems.right + 1 })
      setTranslatedX(translatedX - translationWidth)
    }
    else if (hiddenItems.left === 1) {
      setHiddenItems({ left: 0, right: hiddenItems.right + 1 })
      setTranslatedX(translatedX - translationWidth)
      setIsActive({ right: true, left: false })
    }
  }

  return (
    <section id={s.navbar}>
      <div className={s.wrapper}>
        <LeftBox
          showArrows={showArrows}
          moveLeft={moveLeft}
          isActive={isActive}
        />
        <div className={s.items_container}>
          <MovableContainer
            dispatch={dispatch}
            selected={selected}
            appMuted={appMuted}
            links={links}
            translatedX={translatedX}
          />
        </div>
        <RightBox
          showArrows={showArrows}
          moveRight={moveRight}
          isActive={isActive}
        />
      </div>
      <div className={s.railway_container}>
        <div className={movableLineClass({ selected })} />
      </div>
    </section>
  )
}
