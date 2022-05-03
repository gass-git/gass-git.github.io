import React from 'react'
import s from './styles.module.css'
import { ReactComponent as Developer } from '../../assets/SVGs/developer.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow, faDev } from '@fortawesome/free-brands-svg-icons'
import { faCodeCommit } from '@fortawesome/free-solid-svg-icons'

export default function Latest({ latest }) {
  function Header() {
    return (
      <div style={{ display: 'flex' }}>
        <div>
          <Developer />
        </div>
        <div style={{ marginTop: '15px' }}>
          <h1 style={{ color: 'rgb(70, 201, 70)' }}>Latest 📰</h1>
          <div style={{ color: '#ddd', marginRight: '20px' }}>
            Hey there! welcome to my virtual cave. I'm a programmer specializing in web development.
            Here is where I share my latest activity online.
            I like to think about this section as the eye of a cyclone, the place
            where all my recent activity online it's summarized in a single point.
          </div>
        </div>
      </div>
    )
  }

  function icon(type) {
    switch (type) {
      case 'commit': return <FontAwesomeIcon icon={faCodeCommit} />
      case 'SO answer': return <FontAwesomeIcon icon={faStackOverflow} />
      case 'article': return <FontAwesomeIcon icon={faDev} />
      default: return null
    }
  }

  function getDate(seconds) {
    let x = new window.Date(seconds * 1000)
    let year = x.getFullYear()
    let month = x.getMonth() + 1
    let day = x.getDate()

    if (day < 10) { day = "0" + day }
    if (month < 10) { month = "0" + month }

    let convertedDate = year + "-" + month + "-" + day
    return convertedDate
  }

  function ContextData({ created_at, type, repo_name }) {
    return (
      <div className={s.context_box}>
        {getDate(created_at)}
        {' '}
        /
        {' '}
        {type}
        {repo_name ? ` / repo: ${repo_name.slice(9)}` : null}
      </div>
    )
  }

  if (!latest) return <div>Loading</div>

  return (
    <>
      <Header />
      <div className={s.main_wrapper}>
        <div>
          {
            latest.map((el) => {
              return (
                <div
                  className={s.event_container}
                  onClick={() => window.open(el.url, '_blank')}
                >
                  <div className={s.icon_box}>
                    {icon(el.type)}
                  </div>
                  <div>
                    <ContextData
                      created_at={el.created_at}
                      type={el.type}
                      repo_name={el.repo_name}
                    />
                    <div className={s.detail_box}>
                      {el.detail}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
