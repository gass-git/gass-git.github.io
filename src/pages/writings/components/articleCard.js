import React from 'react'
import s from './articleCard.module.css'

export default function ArticleCard({ i, article }) {
  return (
    <div
      className={s.article_card}
      target='_blank'
      style={i % 2 !== 0 ? { marginLeft: '6%' } : null}
      onClick={() => window.open(article.url, '_blank')}
    >
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
    </div>
  )
}
