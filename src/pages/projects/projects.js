import React from 'react'
import devPlus from '../../global/assets/images/dev_plus.png'
import tipMeDash from '../../global/assets/images/TMD.png'
import Header from './components/header'
import SectionTitle from '../../global/layouts/sectionTitle'
import PinnedProject from './layouts/pinnedProject'

export default function Projects({ repos }) {

  const forTesting = `Fun web application with multiple components
  that display information about a developer in real time, with
  a gamification aspect to it. Inspired by RPG game profiles.`

  if (!repos) {
    return <p>Loading..</p>
  }

  else {
    return (
      <>
        <Header />
        <SectionTitle txt1={`featured`} txt2={`some things I’ve built`} />
        <PinnedProject url={`https://gass.dev`} src={devPlus} about={forTesting} coverPos={'left'} />
        <PinnedProject src={tipMeDash} about={forTesting} coverPos={'right'} />
      </>
    )
  }
}
