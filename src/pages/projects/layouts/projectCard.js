import React from 'react'
import { ReactComponent as Github } from '../../../global/assets/SVGs/github.svg'
import { ReactComponent as Link } from '../../../global/assets/SVGs/link.svg'
import s from './projectCard.module.css'

export function ProjectCard({ repo }) {
  return (
    <section id={s.project_card} key={repo.id}>

      <div className={s.header}>
        <div className={s.left_box}>
          {repo.name}
        </div>
        <div className={s.right_box}>
          <Link
            id={s.link_icon}
            onClick={() => window.open(repo.project_url, '_blank')}
          />
          <Github onClick={() => window.open(repo.repo_url, '_blank')} />
        </div>
      </div>

      <div className={s.about}>
        {repo.about}
      </div>

      <div className={s.tags_wrapper}>
        {
          repo.topics.map((topic) => {
            return (
              <span className={s.tag} key={topic}>
                {topic}
              </span>
            )
          })
        }
      </div>

    </section>
  )
}
