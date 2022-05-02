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

  function Header() {
    return (
      <div className={s.header}>
        <div className={s.left_box}>
          <Chart />
        </div>

        <div className={s.right_box}>
          <h1 className={s.page_title}>
            Fun Stats 💹
          </h1>
          <div className={s.page_about}>
            I didn't know if I should keep this section or remove it.
            Mainly because sometimes it feels a little braggy. But
            to be honest I'm making it just for fun and give my personal
            site some gamification. It is also useful to have a single
            page with all stats, to see everything at once.
          </div>
        </div>
      </div>
    )
  }

  function Reputation() {
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

  function Badges() {
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

  function TopTech() {
    return (
      <div className={s.tech_card}>
        <div className={s.card_title}>
          Top Tech
        </div>
        <div className={s.list}>
          {
            topTech.map((tech) => {
              return (
                <div className={s.tag_box}>
                  <div className={s.name}>
                    {tech.tag_name}
                  </div>
                  <div className={s.score}>
                    {tech.answer_score}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />

      {/* stack overflow stats */}
      <div id={s.stack_overflow}>

        <div className={s.header}>
          <div className={s.icon}>
            <FontAwesomeIcon icon={faStackOverflow} />
          </div>
          <div className={s.title}>
            Stack Overflow
          </div>
        </div>

        <div className={s.body}>
          <div className={s.left_box}>
            <Reputation />
            <Badges />
          </div>
          <div className={s.right_box}>
            <TopTech />
          </div>
        </div>

      </div>

      {/* github stats */}
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

      {/* devto stats */}
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
