import React from 'react'
import s from './styles.module.css'
import { ProjectCard } from './children/projectCard'
import tools from '../../assets/images/tools.png'

export default function Projects({ repos }) {
  if (!repos) return <p>Loading..</p>

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px'
        }}
      >
        <img
          src={tools}
          style={{ width: '100px', marginRight: '20px' }}
        />
        <span
          style={{
            fontSize: '35px',
            fontWeight: '700',
            color: 'white',
            opacity: '0.8'
          }}
        >
          Projects
        </span>
      </div>
      <div className={s.flex_wrapper}>
        {repos.map((repo, i) => <ProjectCard repo={repo} i={i} s={s} />)}
      </div>
    </>
  )
}
