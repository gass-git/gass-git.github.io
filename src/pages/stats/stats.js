import React, { useState } from 'react'
import Header from './components/header'
import SO from './components/SO/SO'
import SectionTitle from '../../global/layouts/sectionTitle'
import ContentWrapper from '../../global/layouts/contentWrapper'

export default function Stats({ SO_topTech, SO_reputation }) {
  const [current, setCurrent] = useState('Stack Overflow')

  if (!SO_topTech || !SO_reputation) return <div>loading..</div>

  else {
    const points = SO_reputation.points
    const badges = SO_reputation.badges
    const topTech = SO_topTech

    return (
      <>
        <Header current={current} setCurrent={setCurrent} />
        <SectionTitle txt1={'statistics'} txt2={current} />

        <ContentWrapper
          element={<SO points={points} badges={badges} topTech={topTech} />}
        />
      </>
    )
  }
}
