import Reac from 'react'
import { ReactComponent as Folder } from '../../../global/assets/SVGs/folder.svg'
import { ReactComponent as Github } from '../../../global/assets/SVGs/github.svg'
import { ReactComponent as Link } from '../../../global/assets/SVGs/link.svg'

export function ProjectCard({ s, repo, i }) {
  return (
    <div
      className={s.project_card}
      style={i % 2 !== 0 ? { marginLeft: '20px' } : null}
    >
      {/* header */}
      <div className={s.header}>
        <div className={s.left_box}>
          <Folder style={{ color: 'aqua', width: '42px' }} />
        </div>
        <div className={s.middle_box}>
          <div
            className={s.movable_text}
            onClick={() => window.open(repo.project_url, '_blank')}
          >
            See Live
          </div>
        </div>
        <div className={s.right_box}>
          <Link
            style={{ marginRight: '20px' }}
            onClick={() => window.open(repo.project_url, '_blank')}
          />
          <Github onClick={() => window.open(repo.repo_url, '_blank')} />
        </div>
      </div>

      {/* body */}
      <div className={s.name}>
        {repo.name}
      </div>
      <div className={s.about}>
        {repo.about}
      </div>

      {/* tags wrapper */}
      <div className={s.tags_wrapper}>
        {
          repo.topics.map((topic) => {
            return (
              <span className={s.tag}>
                {topic}
              </span>
            )
          })
        }
      </div>

    </div>
  )
}
