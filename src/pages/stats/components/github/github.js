import React from 'react'
import s from './github.module.css'
import CountUp from 'react-countup'

export default function Github({ githubStats }) {
  return (
    <section id={s.main}>

      <div className={s.left_box}>
        <div className={s.comments}>
          <div className={s.title}>
            Public Repositories
          </div>
          <div className={s.big_number}>
            <CountUp
              className={s.stat_number}
              end={githubStats.public_repos}
              separator=','
              duration={0.8}
            />
          </div>
        </div>
      </div>

      <div className={s.right_box}>
        <div className={s.comments}>
          <div className={s.title}>
            Followers
          </div>
          <div className={s.big_number}>
            <CountUp
              className={s.stat_number}
              end={githubStats.followers}
              separator=','
              duration={0.6}
            />
          </div>
        </div>
      </div>

    </section>
  )
}
