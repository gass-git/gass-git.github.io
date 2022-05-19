import React, { useEffect, useState } from 'react'
import s from './articlesList.module.css'

export default function ArticlesList({ selectedTags, articles }) {
  const [filteredArticles, setFilteredArticles] = useState(articles)

  function filter() {
    if (selectedTags.length > 0) {
      let filtered = articles.filter((article) => {
        article['tags'].forEach((tag) => {
          if (selectedTags.includes(tag)) return true
          else return false
        })
      })
      setFilteredArticles(filtered)
    }
  }

  const Card = ({ data }) => {
    return (
      <div
        className={s.card}
        target='_blank'
        onClick={() => window.open(data.url, '_blank')}
      >
        <div className={s.title}>
          {data.title}
        </div>
        <div className={s.details}>
          July 7, 2021 • ☕️☕️☕️ 14 min read
        </div>
        <div className={s.description}>
          {data.description}
        </div>
      </div>
    )
  }

  useEffect(() => {
    filter()
  })

  return (
    <section>
      {filteredArticles.map((data) => <Card data={data} />)}
    </section>
  )
}
