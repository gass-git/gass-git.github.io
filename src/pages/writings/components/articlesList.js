import React from 'react'
import s from './articlesList.module.css'

export default function ArticlesList({ filtered }) {
  const Card = ({ data }) => {
    return (
      <section id={s.card} key={data.id} onClick={() => window.open(data.url, '_blank')}>
        <div className={s.title}>
          {data.title}
        </div>
        <div className={s.details}>
          {data.published_at.slice(0, 10)} • {data.reactions} likes
        </div>
        <div className={s.description}>
          {data.description}
        </div>
        <div className={s.tags_wrapper}>
          {data.tags.map((tag) => <div key={tag} className={s.tag}>{tag}</div>)}
        </div>
      </section>
    )
  }

  return (
    <section>
      {filtered.map((data) => <Card key={data.id} data={data} />)}
    </section>
  )
}
