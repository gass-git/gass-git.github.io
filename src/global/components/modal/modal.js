import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import s from './modal.module.css'

export default function Modal({ 
  title,
  children, 
  showModal, 
  setShowModal, 
  scrollPos
  }) {
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    setScrollHeight(document.documentElement.scrollHeight)
  }, [])

  if (showModal) {
    return (
      <section id={s.modal}>
        <div 
          className={s.backdrop}
          style={{ height: `${scrollHeight}px` }}
          onClick={() => setShowModal(false)}
        />
        <div
          className={s.card}
          style={{ top: `${scrollPos + 100}px`}}
        >
          <div className={s.header}>
            <div className={s.title}>
              {title}
            </div>
            <div className={s.Xmark_box}>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setShowModal(false)}
              />
            </div>
          </div>
          <div className={s.content}>
            {children}
          </div>
        </div>
      </section >
    )
  }

  else return (
    null
  )


}
