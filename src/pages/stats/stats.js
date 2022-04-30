import React from 'react'
import s from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faStackOverflow, faDev } from '@fortawesome/free-brands-svg-icons'
import sword from '../../assets/images/wood_sword.png'

export default function Stats({ stats }) {
  if (!stats) return <div>loading..</div>

  const reputation = stats.SO_reputation
  const badges = stats.SO_badges

  function addThousandSeparator(number) {
    let string = number.toString()
    return string.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px'
        }}
      >
        <img
          src={sword}
          style={{ width: '100px', marginRight: '10px' }}
        />
        <span
          style={{
            fontSize: '35px',
            fontWeight: '700',
            color: 'white',
            opacity: '0.8'
          }}
        >
          Stats
        </span>
      </div>
      <div style={{ border: '1px solid white', marginTop: '30px' }}>
        <h2 style={{ color: 'white' }}>Stack Overflow</h2>
        <div className={s.flex_wrapper}>
          <div
            className={s.stat_card}
            style={{ marginRight: '20px' }}
          >
            <div className={s.card_title}>
              Reputation
            </div>
            <div className={s.big_number}>
              {addThousandSeparator(reputation.total)}
            </div>
            <div className={s.flex_box1}>
              <div>
                month:{' '}
                <FontAwesomeIcon
                  icon={faArrowUp}
                  style={{ color: 'green' }}
                />
                {' '}
                {addThousandSeparator(reputation.month_change)}
              </div>
              <div>
                year: {' '}
                <FontAwesomeIcon
                  icon={faArrowUp}
                  style={{ color: 'green' }}
                />
                {' '}
                {addThousandSeparator(reputation.year_change)}
              </div>
            </div>
          </div>
          <div className={s.stat_card}>
            <div className={s.card_title}>
              Badges
            </div>
            <div className={s.flex_box2}>
              <div style={{ color: 'white', marginRight: '50px' }}>
                <FontAwesomeIcon icon={faTrophy} style={{ color: 'gold', opacity: '0.7' }} />
                {' '}
                {badges.gold}
              </div>
              <div style={{ color: 'white', marginRight: '50px' }}>
                <FontAwesomeIcon icon={faTrophy} style={{ color: 'silver', opacity: '0.7' }} />
                {' '}
                {badges.silver}
              </div>
              <div style={{ color: 'white' }}>
                <FontAwesomeIcon icon={faTrophy} style={{ color: 'orange', opacity: '0.7' }} />
                {' '}
                {badges.bronze}
              </div>
            </div>
          </div>
          <div className={s.stat_card}>
            <div className={s.card_title}>
              Top Tech
            </div>
          </div>
        </div>
      </div>
      <center style={{ marginTop: '50px' }}>
        <FontAwesomeIcon
          icon={faGithub}
          style={{ fontSize: '50px', color: 'white', marginRight: '10px' }}
        />
        <span
          style={{
            fontSize: '35px',
            fontWeight: '700',
            color: 'white',
            opacity: '0.8'
          }}
        >
          GitHub
        </span></center>
      <center style={{ marginTop: '50px' }}>
        <FontAwesomeIcon
          icon={faDev}
          style={{ fontSize: '55px', color: 'rgba(0,0,0,0.7)', marginRight: '10px' }}
        />
        <span
          style={{
            fontSize: '35px',
            fontWeight: '700',
            color: 'white',
            opacity: '0.8'
          }}
        >
          Dev.To
        </span></center>
    </>
  )
}
