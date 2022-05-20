import React from 'react'
import { ReactComponent as Folder } from '../../../global/assets/SVGs/folder.svg'
import { ReactComponent as Github } from '../../../global/assets/SVGs/github.svg'
import { ReactComponent as Link } from '../../../global/assets/SVGs/link.svg'
import s from './pinned.module.css'

export default function Pinned({ name, src }) {
  return (
    <section id={s.pinned_project}>
      <div className={s.top}>

        <div className={s.left}>
          <Folder style={{ color: 'aqua', width: '32px' }} />
          <div className={s.project_name}>
            {name}
          </div>
        </div>

        <div className={s.middle}>
          <div className={s.movable_text}>
            See Live
          </div>
        </div>

        <div className={s.right}>
          <Link
            style={{ marginRight: '30px' }}
          />
          <Github />
        </div>

      </div>

      <div className={s.image_wrapper}>
        <img src={src} />
      </div>

    </section>
  )
}
