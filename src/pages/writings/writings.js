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
  const { state, dispatch } = useContext(AppContext)
  const { articles, numberOfRenders } = state
  const [tags, setTags] = useState([])
  const [selected, setSelected] = useState([])
  const [filtered, setFiltered] = useState(articles)
  const [playSound] = useSound(tickSound, { volume: 0.15 })

  function handleSelected(tag) {
    playSound()
    // if the tag is not in selected array, add it
    if (!selected.includes(tag)) setSelected([...selected, tag])
    // if the tag is in selected array remove it
    else setSelected(selected.filter((selection) => selection !== tag))
  }

  function filter() {
    if (selected.length > 0) {
      let filtered = articles.filter((article) => {
        let bool = article['tags'].some((tag) => selected.includes(tag))
        return bool
      })
      setFiltered(filtered)
    }
    else setFiltered(articles)
  }

  /**
   * retrieve all tags from the articles array and add them to the
   * tags array if it's empty.
   */
  useEffect(() => {
    if (tags.length === 0) {
      let arr = []
      articles.forEach((article) => {
        article['tags'].forEach((tag) => {
          if (!tags.includes(tag) && !arr.includes(tag)) arr.push(tag)
        })
      })
      setTags(arr)
    }
  })

  useEffect(() => filter(), [selected])

  useEffect(() => {
    dispatch({type:'update number of renders', page:'writings'})
  }, [])

  return (
    <>
      <Header latestArticle={articles[0]} numberOfRenders={numberOfRenders.writings}/>
      <SectionTitle txt1='archives' txt2='filter by topic' />
      <FilterByTopic
        tags={tags}
        handleSelected={handleSelected}
        selected={selected}
      />
      <ContentWrapper>
        <ArticlesList filtered={filtered} />
      </ContentWrapper>
    </>
  )
}