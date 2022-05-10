import React from 'react'
import s from './projects.module.css'
import devPlus from '../../global/assets/images/dev_plus.png'
import tipMeDash from '../../global/assets/images/TMD.png'
import Header from './components/header'
import SectionTitle from '../../global/layouts/sectionTitle'
import PinnedProject from './layouts/pinnedProject'

export default function Projects({ repos }) {

  const about = `For me programming is a catalyst for creation. 
  To portray an idea into reality and be able to interact 
  with it anywhere on the world I find it to be fascinating, 
  it is the reason I got hooked at age 15 with my first project. 
  This feeling is something I always try to tap into when I'm 
  developing projects.`

  const forTesting = `Fun web application with multiple components
  that display information about a developer
  in real time, with a gamification aspect
  to it. Inspired by RPG game profiles.`

  if (!repos) return <p>Loading..</p>

  return (
    <>
      <Header /> {/* idea: add a close button to the headers */}

      <SectionTitle txt1={`featured`} txt2={`some things I’ve built`} />

      <PinnedProject url={`https://gass.dev`} src={devPlus} about={forTesting} coverPos={'left'} />
      <PinnedProject src={tipMeDash} about={forTesting} coverPos={'right'} />
    </>
  )
}
