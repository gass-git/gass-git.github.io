import React from 'react'
import s from './devto.module.css'

export default function Devto({ comments, reactions }) {
  return (
    <section id={s.main}>

      <div className={s.left_box}>
        <div className={s.comments}>
          <div className={s.title}>
            Total Comments
          </div>
          <div className={s.big_number}>
            {comments}
          </div>
          <div className={s.bottom_wrapper}>
            * in the last 30 articles
          </div>
        </div>
      </div>

      <div className={s.right_box}>
        <div className={s.comments}>
          <div className={s.title}>
            Total Reactions
          </div>
          <div className={s.big_number}>
            {reactions}
          </div>
          <div className={s.bottom_wrapper}>
            * in the last 30 articles
          </div>
        </div>
      </div>

    </section>
  )
}
