import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import s from './wins.module.css'

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
          {badges.gold}
        </div>
        <div style={{ marginRight: '55px' }}>
          <FontAwesomeIcon icon={faTrophy} className={s.silver} />
          {' '}
          {badges.silver}
        </div>
        <div>
          <FontAwesomeIcon icon={faTrophy} className={s.bronze} />
          {' '}
          {badges.bronze}
        </div>
      </div>
    </section>
  )
}
