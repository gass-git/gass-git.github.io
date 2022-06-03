import React from 'react'
import s from './filterByEvent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCommit } from '@fortawesome/free-solid-svg-icons'
import { faStackOverflow, faDev } from '@fortawesome/free-brands-svg-icons'
import getPropValue from '../../../global/functions/getPropValue'

export default function FilterByEvent({ selected, handleFilters }) {
  const tags = ['commits', 'SO answers', 'articles']  // for buttons
  const icons = [faCodeCommit, faStackOverflow, faDev]

  return (
    <section id={s.filterByEvent} data-aos='fade' data-aos-duration='1000'>
      {
        tags.map((tag, i) => {
          return (
            <div
              key={tag}
              className={getPropValue(selected, i) ? s.selected : null}
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
