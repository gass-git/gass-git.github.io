import React from 'react'
import s from './showCase.module.css'
import devPlus from '../../../global/assets/images/dev_plus.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faCircleRight, faFolder } from '@fortawesome/free-regular-svg-icons'

export default function ShowCase() {
  return (
    <section id={s.showcase}>
      <div className={s.header}>
        <div className={s.arrows_wrapper}>
          <FontAwesomeIcon
            icon={faCircleLeft}
            className={s.icon}
            style={{ marginRight: '70px' }}
          />
          <FontAwesomeIcon icon={faCircleRight} className={s.icon} />
        </div>
      </div>
      <div className={s.project_card}>
        <div className={s.image_wrapper}>
          <img
            src={devPlus}
            onClick={() => window.open('https://gass.dev', '_blank')}
          />
        </div>
      </div>
    </section>
  )
}
