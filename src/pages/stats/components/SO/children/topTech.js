import React from 'react'
import s from './topTech.module.css'

export default function TopTech({ topTech }) {
  return (
    <section id={s.tech}>
      <div className={s.title}>
        Top Tech
      </div>
      <div className={s.list}>
        {
          topTech.map((tech) => {
            return (
              <div className={s.tag_box}>
                <div className={s.name}>
                  {tech.tag_name}
                </div>
                <div className={s.score}>
                  {tech.answer_score}
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
