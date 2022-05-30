import React from 'react'
import s from './filterByEvent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCommit } from '@fortawesome/free-solid-svg-icons'
import { faStackOverflow, faDev } from '@fortawesome/free-brands-svg-icons'

export default function FilterByTopics({ selectedTypes, handleFilters }) {
  const events = ['commits', 'SO answers', 'articles']  // for buttons
  const eventTypes = ['commit', 'SO_answer', 'article'] // for filtering data
  const icons = [faCodeCommit, faStackOverflow, faDev]

  return (
    <section id={s.filterByEvent}>
      {
        eventTypes.map((type, i) => {
          return (
            <div 
              key={type}
              className={selectedTypes[type] ? s.selected : null}
              onClick={() => handleFilters(type)}
            >
              <FontAwesomeIcon icon={icons[i]} className={s.icon} />
              {events[i]}
            </div>
          )
        })
      }
    </section >
  )
}
