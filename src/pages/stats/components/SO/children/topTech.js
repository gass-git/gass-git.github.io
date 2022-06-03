import React from 'react'
import s from './topTech.module.css'
import CountUp from 'react-countup'

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
              <div key={tech.tag_name} className={s.tag_box}>
                <div className={s.name}>
                  {tech.tag_name}
                </div>
                <div className={s.score}>
                  <CountUp
                    className={s.stat_number}
                    duration={0.5}
                    end={tech.answer_score}
                    separator=','
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
