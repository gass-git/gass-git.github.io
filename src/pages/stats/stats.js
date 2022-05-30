import React, { useState, useContext } from 'react'
import Header from './components/header'
import SO from './components/SO/SO'
import SectionTitle from '../../global/layouts/sectionTitle'
import ContentWrapper from '../../global/layouts/contentWrapper'
import Devto from './components/devto/devto'
import Github from './components/github/github'
import { AppContext } from '../../App'

export default function Stats() {
  const { state } = useContext(AppContext)
  const { SO_topTech, SO_reputation, articles, githubStats } = state
  const [current, setCurrent] = useState('stack overflow')

  // Stack Overflow stats
  const points = SO_reputation.points
  const badges = SO_reputation.badges
  const topTech = SO_topTech

  // DevTo stats
  const comments = articles.reduce((prev, current) => prev + current.comments, 0)
  const reactions = articles.reduce((prev, current) => prev + current.reactions, 0)

  function statComponent(name) {
    switch (name) {
      case 'stack overflow':
        return (
          <SO points={points} badges={badges} topTech={topTech} />
        )
      case 'devto':
        return (
          <Devto comments={comments} reactions={reactions} />
        )
      case 'github':
        return (
          <Github githubStats={githubStats} />
        )
      default: return null
    }
  }

  return (
    <>
      <Header current={current} setCurrent={setCurrent} />
      <SectionTitle txt1={'statistics'} txt2={current} />

      <ContentWrapper>
        {statComponent(current)}
      </ContentWrapper>
    </>
  )
}

