import React from 'react'
import s from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faStackOverflow, faDev } from '@fortawesome/free-brands-svg-icons'
import { ReactComponent as Chart } from '../../assets/SVGs/chart.svg'

export default function Stats({ SO_topTech, SO_reputation }) {
  if (!SO_topTech || !SO_reputation) return <div>loading..</div>

  const points = SO_reputation.points
  const badges = SO_reputation.badges
  const topTech = SO_topTech

  function addThousandSeparator(number) {
    let string = number.toString()
    return string.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }

  return (
    <>
      <div
        style={{
          display: 'flex'
        }}
      >
        <div>
          <Chart />
        </div>
        <div style={{ marginTop: '15px' }}>
          <h1 style={{ color: 'rgb(70, 201, 70)' }}>Fun Stats</h1>
          <div style={{ color: '#ddd', marginRight: '20px' }}>
            I didn't know if I should keep this section or remove it.
            Mainly because sometimes it feels a little braggy. But
            to be honest I'm making it just for fun and give my personal
            site some gamification. It is also useful to have a single
            page with all stats, to see everything at once.
          </div>
        </div>
      </div>


      <div style={{ marginTop: '30px' }}>


        <div style={{
          display: 'flex',
          color: 'white',
          borderBottom: '1px solid white'
        }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '40px',
              marginLeft: '20px'
            }}
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </div>
          <div style={{
            paddingTop: '15px',
            marginLeft: '15px',
            fontSize: '23px'
          }}
          >
            Stack Overflow
          </div>
        </div>
        <div className={s.flex_wrapper}>


          <div className={s.left_box}>
            <div
              className={s.stat_card}
              style={{ marginRight: '20px' }}
            >
              <div className={s.card_title}>
                Reputation
              </div>
              <div className={s.big_number}>
                {addThousandSeparator(points.total)}
              </div>
              <div className={s.flex_box1}>
                <div>
                  month:{' '}
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    style={{ color: 'green' }}
                  />
                  {' '}
                  {addThousandSeparator(points.month_change)}
                </div>
                <div>
                  year: {' '}
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    style={{ color: 'green' }}
                  />
                  {' '}
                  {addThousandSeparator(points.year_change)}
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
          </div>
          <div className={s.right_box}>
            <div className={s.tech_card}>
              <div className={s.card_title}>
                Top Tech
                <div>
                  {
                    topTech.map((tech) => {
                      return (
                        <p>
                          <div
                            style={{
                              display: 'flex'
                            }}
                          >
                            <div
                              style={{
                                width: '50%',
                                fontSize: '18px',
                                color: 'rgba(255,255,255,0.8)'
                              }}
                            >
                              {tech.tag_name}
                            </div>
                            <div
                              style={{
                                width: '50%',
                                textAlign: 'right',
                                color: 'white'
                              }}
                            >
                              {tech.answer_score}
                            </div>
                          </div>
                        </p>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        color: 'white',
        borderBottom: '1px solid white',
        marginTop: '40px'
      }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '40px',
            marginLeft: '20px'
          }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div style={{
          paddingTop: '15px',
          marginLeft: '15px',
          fontSize: '23px'
        }}
        >
          GitHub
        </div>
      </div>


      <div style={{
        display: 'flex',
        color: 'white',
        borderBottom: '1px solid white',
        marginTop: '40px',
      }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '40px',
            marginLeft: '20px'
          }}
        >
          <FontAwesomeIcon icon={faDev} />
        </div>
        <div style={{
          paddingTop: '15px',
          marginLeft: '15px',
          fontSize: '23px'
        }}
        >
          Dev.To
        </div>
      </div>


    </>
  )
}
