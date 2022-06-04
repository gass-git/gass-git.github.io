import React, { useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import s from './modal.module.css'
import { AppContext } from '../../../App'

export default function Modal() {
  const { state, dispatch } = useContext(AppContext)
  const { showModal, modalImages, modalData } = state

  useEffect(() => {
    if (showModal) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = null
  }, [showModal])

  function handleClose(e) {
    if (e.target.id) dispatch({ type: 'hide modal' })
  }

  if (showModal) {
    return (
      <section className={s.modal} id='modal' onClick={(e) => handleClose(e)}>
        <div className={s.card}>
          
          <div className={s.header}>
            <div className={s.title}>
              {modalData.name}
            </div>
            <div className={s.close_btn} onClick={() => dispatch({ type: 'hide modal' })}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>

          <div className={s.content}>
            {modalImages.map((img) => <img src={img} alt='project' />)}
          </div>

        </div>
      </section>
    )
  }

  else return null
}
