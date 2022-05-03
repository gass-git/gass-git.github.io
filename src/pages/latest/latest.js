import React from 'react'
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
          <h1 style={{ color: 'rgb(70, 201, 70)' }}>Hey there! 👋</h1>
          <div style={{ color: '#ddd', marginRight: '20px' }}>
            Welcome to my virtual space. I'm a programmer specializing in web development.
            Here is where I share my latest activity online.
            I like to think about this section as the eye of a cyclone, the place
            where all my activity online it's summarized in a single point.
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

  return (<>
    <Header />
    <div>
      {
        latest.map((el) => {
          return (
            <div
              style={{
                display: 'flex',
                color: 'white',
                marginTop: '20px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', minWidth: '70px' }}>
                {icon(el.type)}
              </div>
              <div>
                <div style={{ fontSize: '14px', opacity: '0.7' }}>
                  {getDate(el.created_at)}
                  {' '}
                  /
                  {' '}
                  {el.type}
                  {el.repo_name ? ` / repo: ${el.repo_name.slice(9)}` : null}
                </div>
                <div style={{ fontSize: '17px' }}>
                  {el.detail}
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  </>
  )
}
