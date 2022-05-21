import React from 'react'
import { ReactComponent as Folder } from '../../../global/assets/SVGs/folder.svg'
import { ReactComponent as Github } from '../../../global/assets/SVGs/github.svg'
import { ReactComponent as Link } from '../../../global/assets/SVGs/link.svg'
import s from './pinned.module.css'

export default function Pinned({ src, data }) {
  if (!data) return <div>loading..</div>

  return (
    <section id={s.pinned_project}>

      <div className={s.top}>

        <div className={s.left}>
          <Folder className={s.folder} />
          <div className={s.project_name}>
            {data.name}
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
            onClick={() => window.open(data.project_url, 'blank')}
          />
          <Github
            onClick={() => window.open(data.repo_url, 'blank')}
          />
        </div>

      </div>

      <div
        className={s.preview}
        onClick={() => window.open(data.project_url, 'blank')}
      >
        <div className={s.image_wrapper}>
          <img src={src} />
        </div>

        <div className={s.about}>
          {data.about}
        </div>

        <div className={s.tech}>
          {
            data['topics'].map((tech) => {
              return <div>{tech}</div>
            })
          }
        </div>

      </div>

    </section>
  )
}
