import React from 'react'
import s from './filterByTopics.module.css'

export default function FilterByTopics() {
  return (
    <section id={s.filterByTopic}>
      <div className={s.title_wrapper}>

        <div className={s.text_style_one}>
          Archives
        </div>

        <div className={s.text_style_two}>
          search articles by topic
        </div>
      </div>

      <div className={s.topics_wrapper}>
        <div>
          javascript
        </div>
        <div>
          html
        </div>
        <div>
          setinterval
        </div>
        <div>
          javascript
        </div>
        <div>
          javascript
        </div>
        <div>
          html
        </div>
        <div>
          setinterval
        </div>
        <div>
          javascript
        </div>

      </div>
    </section>
  )
}
