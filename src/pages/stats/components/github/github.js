import React from 'react'
import s from './github.module.css'

export default function Github({ githubStats }) {
  return (
    <section id={s.main}>

      <div className={s.left_box}>
        <div className={s.comments}>
          <div className={s.title}>
            Public Repositories
          </div>
          <div className={s.big_number}>
            {githubStats.public_repos}
          </div>
        </div>
      </div>

      <div className={s.right_box}>
        <div className={s.comments}>
          <div className={s.title}>
            Followers
          </div>
          <div className={s.big_number}>
            {githubStats.followers}
          </div>
        </div>
      </div>

    </section>
  )
}
