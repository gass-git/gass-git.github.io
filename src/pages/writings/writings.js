import React from 'react'
import s from './writings.module.css'
import ArticlesList from './components/articlesList'
import Header from './components/header'
import FilterByTopic from './components/filterByTopics'

export default function Writings({ articles }) {

  if (!articles) return <span>LOADING...</span>

  else return (
    <>
      <Header latestArticle={articles[0]} />
      <FilterByTopic />
      <ArticlesList articles={articles} />
    </>
  )
}