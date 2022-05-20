import React from 'react'
import devPlus from '../../global/assets/images/dev_plus.png'
import tipMeDash from '../../global/assets/images/TMD.png'
import Header from './components/header'
import SectionTitle from '../../global/layouts/sectionTitle'
import ContentWrapper from '../../global/layouts/contentWrapper'
import Pinned from './layouts/pinned'

export default function Projects({ repos }) {
  if (!repos) {
    return <p>Loading..</p>
  }

  else {
    return (
      <>
        <Header />
        <SectionTitle txt1={`featured`} txt2={`some things I’ve built`} />
        <ContentWrapper>
          <Pinned name='dev plus' src={devPlus} />
          <Pinned name='tip me dash' src={tipMeDash} />
        </ContentWrapper>
      </>
    )
  }
}
