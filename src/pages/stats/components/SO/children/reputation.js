import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import s from './reputation.module.css'
import thousandSeparator from '../../../../../global/functions/thousandSeparator'

export default function Reputation({ points }) {
  return (
    <section id={s.reputation}>

      <div className={s.title}>
        Reputation
      </div>

      <div className={s.big_number}>
        {thousandSeparator(points.total)}
      </div>

      <div className={s.bottom_wrapper}>
        <div>
          month:{' '}
          <FontAwesomeIcon icon={faArrowUp} style={{ color: 'green' }} />
          {' '}
          {thousandSeparator(points.month_change)}
        </div>
        <div>
          year: {' '}
          <FontAwesomeIcon icon={faArrowUp} style={{ color: 'green' }} />
          {' '}
          {thousandSeparator(points.year_change)}
        </div>
      </div>

    </section>
  )
}