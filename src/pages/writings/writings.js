import React, { useState, useEffect, useContext } from 'react'
import ArticlesList from './components/articlesList'
import Header from './components/header'
import FilterByTopic from './components/filterByTopics'
import SectionTitle from '../../global/layouts/sectionTitle'
import ContentWrapper from '../../global/layouts/contentWrapper'
import useSound from 'use-sound'
import tickSound from '../../global/assets/sounds/yake.wav'
import { AppContext } from '../../App'

export default function Writings() {
  const { state } = useContext(AppContext)
  const { articles } = state
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [filteredArticles, setFilteredArticles] = useState(articles)
  const [playSound] = useSound(tickSound, { volume: 0.6 })

  function handleSelectedTags(tag) {
    playSound()

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

  function filter() {
    if (selectedTags.length > 0) {

      let filtered = articles.filter((article) => {
        let bool = article['tags'].some((tag) => selectedTags.includes(tag))
        return bool
      })
      setFilteredArticles(filtered)
    }
    else setFilteredArticles(articles)
  }

  // retrieve all tags from the articles array
  useEffect(() => {
    // if the data is ready and the tags array is empty continue
    if (articles && tags.length === 0) {
      let arr = []
      articles.forEach((article) => {
        article['tags'].forEach((tag) => {
          if (!tags.includes(tag) && !arr.includes(tag)) arr.push(tag)
        })
      })
      setTags(arr)
    }
  })

  useEffect(() => {
    filter()
  }, [selectedTags])

  if (!articles) return <span>LOADING...</span>

  else return (
    <>
      <Header latestArticle={articles[0]} />
      <SectionTitle txt1='archives' txt2='filter by topic' />
      <FilterByTopic
        tags={tags}
        handleSelectedTags={handleSelectedTags}
        selectedTags={selectedTags}
      />
      <ContentWrapper>
        <ArticlesList filteredArticles={filteredArticles} />
      </ContentWrapper>
    </>
  )
}