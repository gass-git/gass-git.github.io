import React, { useContext } from 'react'
import devPlus_SRC from '../../global/assets/images/dev_plus.png'
import tipMeDash_SRC from '../../global/assets/images/TMD.png'
import Header from './components/header'
import SectionTitle from '../../global/layouts/sectionTitle'
import ContentWrapper from '../../global/layouts/contentWrapper'
import Pinned from './layouts/pinned'
import { ProjectCard } from './layouts/projectCard'
import { AppContext } from '../../App'
import s from './projects.module.css'

export default function Projects() {
  const { state } = useContext(AppContext)
  const { repos } = state

  const pinned_IDs = [425300173, 372308367]
  const pinnedRepos = repos.filter((repo) => pinned_IDs.includes(repo.id))
  const unpinnedRepos = repos.filter((repo) => !pinned_IDs.includes(repo.id))

  return (
    <>
      <Header />

      <SectionTitle txt1={`featured`} txt2={`some things I’ve built`} />
      <ContentWrapper>
        <Pinned src={devPlus_SRC} data={pinnedRepos[0]} />
        <Pinned src={tipMeDash_SRC} data={pinnedRepos[1]} />
      </ContentWrapper>

      <SectionTitle txt1={`archives`} txt2={`other networthy projects`} />
      <ContentWrapper>
        <div className={s.unpinned_wrapper}>
          {
            unpinnedRepos.map((repo, i) => {
              return <ProjectCard key={repo.id} repo={repo} i={i} />
            })
          }
        </div>
      </ContentWrapper>
    </>
  )
}
