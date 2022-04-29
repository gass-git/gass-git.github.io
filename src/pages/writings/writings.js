import React from 'react'
import s from './styles.module.css'
import Title from '../../layouts/title'

export default function Writings({ articles }) {

  function ArticleCard({ article }) {
    return (
      <div className={s.article_card}>
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

  if (articles === undefined) {
    return <span>LOADING...</span>
  }
  else if (articles) {
    return (
      <>
        {articles.map((article) => <ArticleCard article={article} />)}
      </>
    )
  }
}
