import React from 'react'
import Header from './components/header'
import SO from './components/SO/SO'

export default function Stats({ SO_topTech, SO_reputation }) {

  if (!SO_topTech || !SO_reputation) return <div>loading..</div>

  else {
    const points = SO_reputation.points
    const badges = SO_reputation.badges
    const topTech = SO_topTech

    return (
      <>
        <Header />
        <SO points={points} badges={badges} topTech={topTech} />
      </>
    )
  }
}
