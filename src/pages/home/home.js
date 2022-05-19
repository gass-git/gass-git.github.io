import React, { useState, useEffect } from 'react'
import Latest from './components/latest/latest'
import SectionTitle from '../../global/layouts/sectionTitle'
import Header from './components/header'
import FilterByEvent from './components/filterByEvent'
import ContentWrapper from '../../global/layouts/contentWrapper'
import useSound from 'use-sound'
import tickSound from '../../global/assets/sounds/yake.wav'

export default function Home({ latest }) {
  const [playSound] = useSound(tickSound, { volume: 0.6 })
  const [selectedTypes, setSelectedTypes] = useState({
    commit: false,
    SO_answer: false,
    article: false
  })
  const [filteredData, setFilteredData] = useState(latest)

  function handleFilters(filter) {
    playSound()

    switch (filter) {
      case 'commit':
        return setSelectedTypes({
          ...selectedTypes,
          commit: !selectedTypes.commit
        })
      case 'SO_answer':
        return setSelectedTypes({
          ...selectedTypes,
          SO_answer: !selectedTypes.SO_answer
        })
      case 'article':
        return setSelectedTypes({
          ...selectedTypes,
          article: !selectedTypes.article
        })
      default:
        return null
    }
  }

  function filter() {
    // if the user has not selected filters, show all
    if (!selectedTypes.commit && !selectedTypes.SO_answer && !selectedTypes.article) {
      return setFilteredData(latest)
    }
    else {
      return setFilteredData(latest.filter((el) => selectedTypes[el.type]))
    }
  }

  useEffect(() => {
    filter()
  }, [selectedTypes, latest])

  if (!latest) {
    return <div>Loading</div>
  }

  else {
    return (
      <section id='home'>
        <Header />
        <SectionTitle txt1='latest' txt2='activity online' />
        <FilterByEvent selectedTypes={selectedTypes} handleFilters={handleFilters} />
        <ContentWrapper>
          <Latest filteredData={filteredData} />
        </ContentWrapper>
      </section>
    )
  }

}
