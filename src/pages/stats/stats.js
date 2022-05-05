import React from 'react'
import s from './stats.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow, faDev } from '@fortawesome/free-brands-svg-icons'
import { ReactComponent as Chart } from '../../global/assets/SVGs/chart.svg'
import Header from '../../global/layouts/header'
import ReputationCard from './components/reputationCard'
import BadgesCard from './components/badgesCard'
import TopTechCard from './components/topTechCard'
import SectionHeader from './layouts/sectionHeader'

export default function Stats({ SO_topTech, SO_reputation }) {

  const about = `I didn't know if I should keep this section or remove it.
  Mainly because sometimes it feels a little braggy. But to be honest
  I'm making it just for fun and give my personal site some gamification.
  It is also useful to have a single page with all stats, to see everything 
  at once.`

  if (!SO_topTech || !SO_reputation) return <div>loading..</div>

  else {
    const points = SO_reputation.points
    const badges = SO_reputation.badges
    const topTech = SO_topTech

    return (
      <>
        <Header SVG={<Chart />} title='statistics' about={about} />

        {/* stack overflow stats */}
        <section id={s.stack_overflow}>
          <SectionHeader
            SVG={<FontAwesomeIcon icon={faStackOverflow} />}
            title='stack overflow'
          />
          <div className={s.body}>
            <div className={s.left_box}>
              <ReputationCard s={s} points={points} />
              <BadgesCard s={s} badges={badges} />
            </div>
            <div className={s.right_box}>
              <TopTechCard s={s} topTech={topTech} />
            </div>
          </div>
        </section>


        {/* github stats */}
        <section id={s.github}>
          <SectionHeader
            SVG={<FontAwesomeIcon icon={faGithub} />}
            title='github'
          />
        </section>

        {/* devto stats */}
        <section id={s.github}>
          <SectionHeader
            SVG={<FontAwesomeIcon icon={faDev} />}
            title='devto'
          />
        </section>
      </>
    )
  }
}
