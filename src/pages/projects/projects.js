import React, { useEffect, useState } from 'react'
import devPlus_SRC from '../../global/assets/images/dev_plus.png'
import tipMeDash_SRC from '../../global/assets/images/TMD.png'
import Header from './components/header'
import SectionTitle from '../../global/layouts/sectionTitle'
import ContentWrapper from '../../global/layouts/contentWrapper'
import Pinned from './layouts/pinned'
import { ProjectCard } from './layouts/projectCard'
import { withTheme } from '@emotion/react'
import Modal from '../../global/components/modal/modal'

export default function Projects({ repos }) {
  const pinned = [425300173, 372308367] // ID of pinned repos
  const [pinnedRepos, setPinnedRepos] = useState([])
  const [unpinnedRepos, setUnpinnedRepos] = useState(repos)

  function updatePinnedRepos() {
    let filteredRepos = repos.filter((repo) => pinned.includes(repo.id))
    setPinnedRepos(filteredRepos)
  }

  function updateUnpinnedRepos() {
    let filteredRepos = repos.filter((repo) => !pinned.includes(repo.id))
    setUnpinnedRepos(filteredRepos)
  }

  useEffect(() => {
    if (repos) {
      updatePinnedRepos()
      updateUnpinnedRepos()
    }
  }, [repos])

  if (!repos) return <p>Loading..</p>
  else return (
    <>
      <Modal />
      <Header />

      <SectionTitle txt1={`featured`} txt2={`some things I’ve built`} />
      <ContentWrapper>
        <Pinned src={devPlus_SRC} data={pinnedRepos[0]} />
        <Pinned src={tipMeDash_SRC} data={pinnedRepos[1]} />
      </ContentWrapper>

      <SectionTitle txt1={`archives`} txt2={`other networthy projects`} />
      <ContentWrapper>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '800px'
          }}
        >
          {
            unpinnedRepos.map((repo, i) => {
              return <ProjectCard repo={repo} i={i} />
            })
          }
        </div>
      </ContentWrapper>

    </>
  )
}
