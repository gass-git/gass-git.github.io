import React from 'react'
import ArticlesList from './components/articlesList'
import Header from './components/header'
import FilterByTopic from './components/filterByTopics'
import SectionTitle from '../../global/layouts/sectionTitle'
import ContentWrapper from '../../global/layouts/contentWrapper'

export default function Writings({ articles }) {
  if (!articles) return <span>LOADING...</span>

  else return (
    <>
      <Header latestArticle={articles[0]} />

      <SectionTitle txt1={`Archives`} txt2={`search by topic`} />
      <FilterByTopic />
      <ContentWrapper
        element={<ArticlesList articles={articles} />}
      />
    </>
  )
}