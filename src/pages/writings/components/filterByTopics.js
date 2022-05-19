import React from 'react'
import s from './filterByTopics.module.css'

export default function FilterByTopics({ tags, handleSelectedTags }) {
  return (
    <section id={s.filterByTopic}>
      {
        tags.map((tag) => {
          return (
            <div onClick={() => handleSelectedTags(tag)}>
              {tag}
            </div>
          )
        })
      }
    </section>
  )
}
