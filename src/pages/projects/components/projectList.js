import React from 'react'
import { ProjectCard } from '../layouts/projectCard'
import s from './projectList.module.css'
import SectionTitle from '../../../global/layouts/sectionTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

export default function ProjectList({ repos }) {
  return (
    <section id={s.project_list}>
      <SectionTitle
        svg={<FontAwesomeIcon icon={faFolder} />}
        title={`other noteworthy projects`}
      />
      <div className={s.row_wrap}>
        {repos.map((repo, i) => <ProjectCard repo={repo} i={i} s={s} />)}
      </div>
    </section>
  )
}
