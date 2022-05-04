import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function ReputationCard({ s, points }) {

  function addThousandSeparator(number) {
    let string = number.toString()
    return string.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }

  return (
    <div className={s.reputation_card}>
      <div className={s.card_title}>
        Reputation
      </div>
      <div className={s.big_number}>
        {addThousandSeparator(points.total)}
      </div>
      <div className={s.flex_box1}>
        <div>
          month:{' '}
          <FontAwesomeIcon icon={faArrowUp} style={{ color: 'green' }} />
          {' '}
          {addThousandSeparator(points.month_change)}
        </div>
        <div>
          year: {' '}
          <FontAwesomeIcon icon={faArrowUp} style={{ color: 'green' }} />
          {' '}
          {addThousandSeparator(points.year_change)}
        </div>
      </div>
    </div>
  )
}