import React from 'react'
import s from './styles.module.css'
import { ProjectCard } from './children/projectCard'
import { ReactComponent as Innovation } from '../../assets/SVGs/innovation.svg'
import Header from '../../layouts/header'

export default function Projects({ repos }) {

  const about = `I like to think of programming as a catalyst for 
  creating tool. To portray an idea into reality and be able to interact
  with it anywhere on the world I find it to be fascinating. I'm constantly
  building things and the persue for building the future inspires me
  to keep grinding.`

  if (!repos) return <p>Loading..</p>

  return (
    <>
      <Header SVG={<Innovation />} title='projects' about={about} />
      <div className={s.flex_wrapper}>
        {repos.map((repo, i) => <ProjectCard repo={repo} i={i} s={s} />)}
      </div>
    </>
  )
}
