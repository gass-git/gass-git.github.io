import React from 'react'
import s from './styles.module.css'
import ArticleCard from './children/articleCard'

export default function Writings({ articles }) {
  if (articles === undefined) {
    return <span>LOADING...</span>
  }
  else if (articles) {
    return articles.map((article) => <ArticleCard s={s} article={article} />)
  }
}
