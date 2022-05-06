import React from 'react'
import s from './gallery.module.css'
import { ReactComponent as Folder } from '../../../global/assets/SVGs/folder.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import devPlus from '../../../global/assets/images/dev_plus.jpg'
import tipMeDash from '../../../global/assets/images/tip_me_dash.jpg'
import minimis from '../../../global/assets/images/minimis.jpg'
import SectionTitle from '../../../global/layouts/sectionTitle'

export default function Gallery() {
  return (
    <section id={s.gallery}>

      <SectionTitle
        svg={<FontAwesomeIcon icon={faWrench} />}
        title={`some things I've built`}
      />

      <div className={s.images_wrapper}>
        <div
          className={`${s.image_box} ${s.selected}`}
          style={{
            marginRight: '30px'
          }}
        >
          <img src={devPlus} width='330' />
        </div>
        <div
          className={s.image_box}
          style={{
            marginRight: '30px'
          }}
        >
          <img src={tipMeDash} width='300' />
        </div>

        <div className={s.image_box}>
          <img src={minimis} width='270' />
        </div>
      </div>

      <div className={s.project_details}>

      </div>

    </section >
  )
}
