import React from 'react'
import devPlus from '../../global/assets/images/dev_plus.png'
import tipMeDash from '../../global/assets/images/TMD.png'
import Header from './components/header'
import SectionTitle from '../../global/layouts/sectionTitle'
import ContentWrapper from '../../global/layouts/contentWrapper'
import Pinned from './layouts/pinned'

export default function Projects({ repos }) {
  const about_devPlus = `Fun web application with multiple components 
  that display information about a developer in real time, with a 
  gamification aspect to it. Inspired by RPG game profiles.`

  const about_TMD = `Web application that allow users to accept 
  support from fans in Dash cryptocurrency.`

  if (!repos) {
    return <p>Loading..</p>
  }

  else {
    return (
      <>
        <Header />
        <SectionTitle txt1={`featured`} txt2={`some things I’ve built`} />
        <ContentWrapper>
          <Pinned name='dev plus' src={devPlus} about={about_devPlus} />
          <Pinned name='tip me dash' src={tipMeDash} about={about_TMD} />
        </ContentWrapper>
      </>
    )
  }
}
