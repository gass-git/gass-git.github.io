import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

export default function BadgesCard({ s, badges }) {
  return (
    <div className={s.badges_card}>
      <div className={s.card_title}>
        Badges
      </div>
      <div className={s.flex_box2}>
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
    </div>
  )
}
