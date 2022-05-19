import React, { useState } from 'react'
import ArticlesList from './components/articlesList'
import Header from './components/header'
import FilterByTopic from './components/filterByTopics'
import SectionTitle from '../../global/layouts/sectionTitle'
import ContentWrapper from '../../global/layouts/contentWrapper'

export default function Writings({ articles }) {
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  if (!articles) return <span>LOADING...</span>

  else {
    // retrieve all tags from the articles array
    articles.forEach((article) => {
      article['tags'].forEach((tag) => {
        if (!tags.includes(tag)) setTags([...tags, tag])
      })
    })

    function handleSelectedTags(tag) {
      // if tag is not in selectedTags array, add it
      if (!selectedTags.includes(tag)) {
        setSelectedTags([...selectedTags, tag])
      }

      // if tag is in selectedTags array remove it
      else {
        let filteredTags = selectedTags.filter((selectedTag) => selectedTag !== tag)
        setSelectedTags(filteredTags)
      }
    }

    return (
      <>
        <Header latestArticle={articles[0]} />
        <SectionTitle txt1='archives' txt2='filter by topic' />
        <FilterByTopic tags={tags} handleSelectedTags={handleSelectedTags} />
        <ContentWrapper>
          <ArticlesList articles={articles} selectedTags={selectedTags} />
        </ContentWrapper>
      </>
    )
  }
}