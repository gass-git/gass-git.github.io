import React from 'react'
import s from './filterByTopics.module.css'

export default function FilterByTopics() {
  const topics = ['javascript', 'html', 'setinterval', 'laravel', 'react', 'challenge', 'css']

  return (
    <section id={s.filterByTopic}>
      {
        topics.map((topic) => {
          return <div>{topic}</div>
        })
      }
    </section>
  )
}
