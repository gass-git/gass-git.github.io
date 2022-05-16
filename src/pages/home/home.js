import React from 'react'
import Latest from './components/latest/latest'
import SectionTitle from '../../global/layouts/sectionTitle'
import Header from './components/header'
import FilterByEvent from './components/filterByEvent'

export default function Home({ latest }) {
  if (!latest) {
    return <div>Loading</div>
  }

  else {
    return (
      <section id='home'>
        <Header />
        <SectionTitle txt1={'Latest'} txt2={'activity online'} />
        <FilterByEvent />
        <Latest latest={latest} />
      </section>
    )
  }

}
