import React from 'react'
import s from './styles.module.css'
import { ProjectCard } from './children/projectCard'
import { ReactComponent as Innovation } from '../../assets/SVGs/innovation.svg'

export default function Projects({ repos }) {
  if (!repos) return <p>Loading..</p>

  return (
    <>
      <div
        style={{
          display: 'flex'
        }}
      >
        <div>
          <Innovation />
        </div>
        <div style={{ marginTop: '15px' }}>
          <h1 style={{ color: 'rgb(70, 201, 70)' }}>Projects 🧪</h1>
          <div style={{ color: '#ddd', marginRight: '20px' }}>
            I like to think of programming as a catalyst for creating tool.
            To portray an idea into reality and be able to interact with it
            anywhere on the world I find it to be fascinating. I'm constantly
            building things and the persue for building the future inspires me
            to keep grinding.
          </div>
        </div>

      </div>
      <div className={s.flex_wrapper}>
        {repos.map((repo, i) => <ProjectCard repo={repo} i={i} s={s} />)}
      </div>
    </>
  )
}
