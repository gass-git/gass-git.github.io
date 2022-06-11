import React, { useState, useEffect, useContext } from 'react'
import Latest from './components/latest/latest'
import SectionTitle from '../../global/layouts/sectionTitle'
import Header from './components/header'
import FilterByEvent from './components/filterByEvent'
import ContentWrapper from '../../global/layouts/contentWrapper'
import useSound from 'use-sound'
import tickSound from '../../global/assets/sounds/yake.wav'
import { AppContext } from '../../App'

export default function Home() {
  const { state, dispatch } = useContext(AppContext)
  const { latest, numberOfRenders } = state
  const [filtered, setFiltered] = useState(latest)
  const [selected, setSelected] = useState({ commit: false, answer: false, article: false })
  const [playSound] = useSound(tickSound, { volume: 0.15 })

  useEffect(() => {
    dispatch({type:'update number of renders', page:'home'})
  }, [])

  function handleFilters(tag) {
    //playSound()

    switch (tag) {
      case 'commits':
        return setSelected({ ...selected, commit: !selected.commit })

      case 'SO answers':
        return setSelected({ ...selected, answer: !selected.answer })

      case 'articles':
        return setSelected({ ...selected, article: !selected.article })

      default:
        return null
    }
  }

  function filter() {
    // if the user hasn't selected filters, show all
    if (!selected.commit && !selected.answer && !selected.article) {
      return setFiltered(latest)
    }
    else {
      return setFiltered(latest.filter((el) => selected[el.type]))
    }
  }

  useEffect(() => filter(), [selected, latest])

  return (
    <section id='home'>
      <Header numberOfRenders={numberOfRenders.home}/>
      <SectionTitle txt1='latest' txt2='activity online' />
      <FilterByEvent selected={selected} handleFilters={handleFilters} />
      <ContentWrapper>
        <Latest filteredData={filtered} />
      </ContentWrapper>
    </section>
  )
}
