import React from 'react'
import { ProjectCard } from '../layouts/projectCard'
import SectionTitle from '../../../global/layouts/sectionTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

export default function ProjectList({ repos }) {
  return (
    <section>
      <SectionTitle
        svg={<FontAwesomeIcon icon={faFolder} />}
        title={`other noteworthy projects`}
      />
      <div>
        {repos.map((repo, i) => <ProjectCard repo={repo} i={i} s={s} />)}
      </div>
    </section>
  )
}
