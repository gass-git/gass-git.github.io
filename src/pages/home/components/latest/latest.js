import React, { useEffect, useState } from 'react'
import s from './latest.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow, faDev } from '@fortawesome/free-brands-svg-icons'
import { faCodeCommit } from '@fortawesome/free-solid-svg-icons'
import ContextData from './children/contextData'

export default function Latest({ filteredData }) {


  function icon(type) {
    switch (type) {
      case 'commit': return <FontAwesomeIcon icon={faCodeCommit} />
      case 'SO_answer': return <FontAwesomeIcon icon={faStackOverflow} />
      case 'article': return <FontAwesomeIcon icon={faDev} />
      default: return null
    }
  }

  return (
    <>
      {
        filteredData.map((el) => {
          return (
            <div
              className={s.event_wrapper}
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
    </>
  )
}
