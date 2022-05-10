import React from 'react'
import s from './pinnedProject.module.css'

export default function PinnedProject({ url, src, about, coverPos }) {
  return (
    <section id={s.pinned}>

      {
        coverPos === 'left' ?
          <div
            className={s.image_box}
            style={{ marginRight: '20px' }}
            onClick={() => window.open(url, '_blank')}
          >
            <img src={src} />
          </div>
          :
          null
      }

      <div className={s.details_box}>
        <div className={s.name_wrapper}>
          <div className={s.name}>dev-plus</div>
        </div>
        <div className={s.about}>
          {about}
        </div>
        <div className={s.tags_wrapper}>
        </div>
      </div>

      {
        coverPos === 'right' ?
          <div
            className={s.image_box}
            style={{ marginLeft: '20px' }}
          >
            <img src={src} />
          </div>
          :
          null
      }

    </section>
  )
}
