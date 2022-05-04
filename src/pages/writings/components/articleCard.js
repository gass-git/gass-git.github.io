import React from 'react'

export default function ArticleCard({ s, article }) {
  return (
    <a href={article.url} className={s.article_card} target='_blank'>
      <div>

        <div className={s.cover}>
          <img src={article.cover_url} />
        </div>

        <div className={s.details_box}>

          <div className={s.title}>
            {article.title}
          </div>

          <div className={s.description}>
            {article.description}
          </div>

        </div>

      </div>
    </a>
  )
}
