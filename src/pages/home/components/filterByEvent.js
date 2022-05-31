import React from 'react'
import s from './filterByEvent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCommit } from '@fortawesome/free-solid-svg-icons'
import { faStackOverflow, faDev } from '@fortawesome/free-brands-svg-icons'

export default function FilterByEvent({ selected, handleFilters }) {
  const tags = ['commits', 'SO answers', 'articles']  // for buttons
  const icons = [faCodeCommit, faStackOverflow, faDev]

  function getValueByIndex(obj, index) {
    let keysArray = Object.keys(obj)
    let key = keysArray[index]
    return obj[key]
  }

  return (
    <section id={s.filterByEvent}>
      {
        tags.map((tag, i) => {
          return (
            <div
              key={tag}
              className={getValueByIndex(selected, i) ? s.selected : null}
              onClick={() => handleFilters(tag)}
            >
              <FontAwesomeIcon icon={icons[i]} className={s.icon} />
              {tags[i]}
            </div>
          )
        })
      }
    </section >
  )
}
