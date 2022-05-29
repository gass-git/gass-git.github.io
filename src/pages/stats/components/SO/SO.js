import React from 'react'
import s from './SO.module.css'
import Reputation from './children/reputation'
import Wins from './children/wins'
import TopTech from './children/topTech'

export default function SO({ points, badges, topTech }) {
  return (
    <>
      <section id={s.main}>

        <div className={s.left_box}>
          <Reputation points={points} />
          <Wins badges={badges} />
        </div>

        <div className={s.right_box}>
          <TopTech topTech={topTech} />
        </div>

      </section>
    </>
  )
}
