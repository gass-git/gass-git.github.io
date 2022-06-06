import React, { useContext, useEffect } from 'react'
import devPlus_SRC from '../../global/assets/images/dev_plus.png'
import tipMeDash_SRC from '../../global/assets/images/TMD.png'
import Header from './components/header'
import SectionTitle from '../../global/layouts/sectionTitle'
import ContentWrapper from '../../global/layouts/contentWrapper'
import Pinned from './layouts/pinned'
import { ProjectCard } from './layouts/projectCard'
import { AppContext } from '../../App'
import s from './projects.module.css'
import TMD1 from '../../global/assets/projectImages/TMD/1.png'
import TMD2 from '../../global/assets/projectImages/TMD/2.png'
import TMD3 from '../../global/assets/projectImages/TMD/3.png'
import TMD4 from '../../global/assets/projectImages/TMD/4.png'
import TMD5 from '../../global/assets/projectImages/TMD/5.png'
import TMD6 from '../../global/assets/projectImages/TMD/6.png'
import DP1 from '../../global/assets/projectImages/devPlus/1.png'
import DP2 from '../../global/assets/projectImages/devPlus/2.png'
import DP3 from '../../global/assets/projectImages/devPlus/3.png'
import DP4 from '../../global/assets/projectImages/devPlus/4.png'

export default function Projects() {
  const { state, dispatch } = useContext(AppContext)
  const { repos, numberOfRenders } = state
  const pinned_IDs = [425300173, 372308367]
  const pinnedRepos = repos.filter((repo) => pinned_IDs.includes(repo.id))
  const unpinnedRepos = repos.filter((repo) => !pinned_IDs.includes(repo.id))
  const images = {
    devPlus: [DP1, DP2, DP3, DP4],
    TMD: [TMD1, TMD2, TMD3, TMD4, TMD5, TMD6]
  }

  useEffect(() => {
    dispatch({ type: 'update number of renders', page: 'projects' })
  }, [])

  return (
    <>
      <Header numberOfRenders={numberOfRenders.projects} />
      <SectionTitle txt1={`featured`} txt2={`things I’ve built`} />
      <ContentWrapper>
        <Pinned src={devPlus_SRC} data={pinnedRepos[0]} images={images.devPlus} />
        <Pinned src={tipMeDash_SRC} data={pinnedRepos[1]} images={images.TMD} />
      </ContentWrapper>

      <SectionTitle txt1={`archives`} txt2={`other projects`} />
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
