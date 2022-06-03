import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import s from './wins.module.css'
import CountUp from 'react-countup'

export default function Wins({ badges }) {
  return (
    <section id={s.wins}>
      <div className={s.title}>
        Wins
      </div>
      <div className={s.container}>
        <div style={{ marginRight: '55px' }}>
          <FontAwesomeIcon icon={faTrophy} className={s.gold} />
          {' '}
          <CountUp
            className={s.stat_number}
            duration={0.4}
            end={badges.gold}
            separator=','
          />
        </div>
        <div style={{ marginRight: '55px' }}>
          <FontAwesomeIcon icon={faTrophy} className={s.silver} />
          {' '}
          <CountUp
            className={s.stat_number}
            duration={0.6}
            end={badges.gold}
            separator=','
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faTrophy} className={s.bronze} />
          {' '}
          <CountUp
            className={s.stat_number}
            duration={0.3}
            end={badges.bronze}
            separator=','
          />
        </div>
      </div>
    </section>
  )
}
