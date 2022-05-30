import React from 'react'
import s from './filterByTopics.module.css'

export default function FilterByTopics({ tags, handleSelectedTags, selectedTags }) {
  return (
    <section id={s.filterByTopic}>
      {
        tags.map((tag) => {
          return (
            <div
              key={tag}
              className={selectedTags.includes(tag) ? s.selected : null}
              onClick={() => handleSelectedTags(tag)}>
              {tag}
            </div>
          )
        })
      }
    </section>
  )
}
