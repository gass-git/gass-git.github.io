import React from 'react'
import s from './writings.module.css'
import ArticleCard from './components/articleCard'
import Header from './components/header'
import FilterByTopic from './components/filterByTopics'

export default function Writings({ articles }) {

  if (!articles) return <span>LOADING...</span>

  else return (
    <>
      <Header latestArticle={articles[0]} />
      <FilterByTopic />
      <section id={s.list}>
        <div className={s.row_wrap}>
          {articles.map((article, i) => <ArticleCard i={i} article={article} />)}
        </div>
      </section>
    </>
  )
}