import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import s from './reputation.module.css'
import thousandSeparator from '../../../../../global/functions/thousandSeparator'
import { space1, space2, Space3 } from '../../../../../global/utilities/spaces'

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
        <div id={s.month_change}>
          month {space1}
          <FontAwesomeIcon icon={faArrowUp} style={{ color: 'green' }} />
          {space2}
          {thousandSeparator(points.month_change)}
        </div>
        <div id={s.year_change}>
          year {space1}
          <FontAwesomeIcon icon={faArrowUp} style={{ color: 'green' }} />
          {space2}
          {thousandSeparator(points.year_change)}
        </div>
      </div>

    </section>
  )
}