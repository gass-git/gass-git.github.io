import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import s from './reputation.module.css'
import { space1, space2, Space3 } from '../../../../../global/utilities/spaces'
import CountUp from 'react-countup'

export default function Reputation({ points }) {
  return (
    <section id={s.reputation}>

      <div className={s.title}>
        Reputation
      </div>

      <div className={s.big_number_box}>
        <CountUp
          className={s.stat_number}
          end={points.total}
          separator=','
        />
      </div>

      <div className={s.bottom_wrapper}>
        <div id={s.month_change}>
          month {space1}
          <FontAwesomeIcon icon={faArrowUp} style={{ color: 'green' }} />
          {space2}
          <CountUp
            className={s.stat_number}
            duration={0.75}
            end={points.month_change}
            separator=','
          />
        </div>
        <div id={s.year_change}>
          year {space1}
          <FontAwesomeIcon icon={faArrowUp} style={{ color: 'green' }} />
          {space2}
          <CountUp
            className={s.stat_number}
            duration={1}
            end={points.year_change}
            separator=','
          />
        </div>
      </div>

    </section>
  )
}