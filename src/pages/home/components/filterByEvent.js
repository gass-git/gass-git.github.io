import React from 'react'
import s from './filterByEvent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCommit } from '@fortawesome/free-solid-svg-icons'
import { faStackOverflow, faDev } from '@fortawesome/free-brands-svg-icons'

export default function FilterByTopics() {
  const events = ['commits', 'SO answers', 'articles']
  const icons = [faCodeCommit, faStackOverflow, faDev]

  return (
    <section id={s.filterByEvent}>
      {
        events.map((el, i) => {
          return (
            <div>
              <FontAwesomeIcon
                icon={icons[i]}
                style={{
                  margin: '0px 20px 0px 0px',
                  fontSize: '22px'
                }}
              />
              {el}
            </div>
          )
        })
      }
    </section>
  )
}
