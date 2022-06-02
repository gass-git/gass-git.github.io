import React, { useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import s from './modal.module.css'
import TMD2 from '../../assets/projectImages/TMD/2.png'
import {AppContext} from '../../../App'

export default function Modal() {
  const {state, dispatch} = useContext(AppContext)
  const {showModal} = state
  
  useEffect(() => {
    if(showModal) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = null
  },[showModal])

  function handleClose(e){
    if(e.target.id) dispatch({type:'hide modal'})
  }

  if (showModal) {
    return (
      <section className={s.modal} id='modal' onClick={(e) => handleClose(e)}>
          <div className={s.card}>
            <div className={s.header}>
              <div className={s.title}>
                hello
              </div>
              <div className={s.close_btn} id='close_btn' onClick={(e) => handleClose(e)}>
                <FontAwesomeIcon id='cross_icon' icon={faXmark}/>
              </div>
            </div>
            <div className={s.content}>
              <img src={TMD2} />
            </div>
          </div>
      </section>
    )
  }

  else return null
}
