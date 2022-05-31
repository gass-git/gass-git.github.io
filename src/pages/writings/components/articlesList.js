import React from 'react'
import s from './articlesList.module.css'

export default function ArticlesList({ filtered }) {
  const Card = ({ data }) => {
    return (
      <section id={s.card} onClick={() => window.open(data.url, '_blank')}>
        <div className={s.title}>
          {data.title}
        </div>
        <div className={s.details}>
          {data.published_at.slice(0, 10)} • {data.reactions} likes
        </div>
        <div className={s.description}>
          {data.description}
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
