import React, { useState } from 'react'
import Latest from './components/latest/latest'
import SectionTitle from '../../global/layouts/sectionTitle'
import Header from './components/header'
import FilterByEvent from './components/filterByEvent'
import ContentWrapper from '../../global/layouts/contentWrapper'

export default function Home({ latest }) {
  const [filters, setFilters] = useState({
    commit: false,
    SO_answer: false,
    article: false
  })

  function handleFilters(filter) {
    switch (filter) {
      case 'commit':
        return setFilters({
          ...filters,
          commit: !filters.commit
        })
      case 'SO_answer':
        return setFilters({
          ...filters,
          SO_answer: !filters.SO_answer
        })
      case 'article':
        return setFilters({
          ...filters,
          article: !filters.article
        })
      default:
        return null
    }
  }

  if (!latest) {
    return <div>Loading</div>
  }

  else {
    return (
      <section id='home'>
        <Header />
        <SectionTitle txt1={'Latest'} txt2={'activity online'} />
        <FilterByEvent filters={filters} handleFilters={handleFilters} />
        <ContentWrapper element={<Latest latest={latest} filters={filters} />} />
      </section>
    )
  }

}
