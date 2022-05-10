import React from 'react'
import s from './projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import devPlus from '../../global/assets/images/dev_plus.png'
import tipMeDash from '../../global/assets/images/TMD.png'
import Header from './components/header'
import SectionTitle from '../../global/layouts/sectionTitle'

export default function Projects({ repos }) {

  const about = `For me programming is a catalyst for creation. 
  To portray an idea into reality and be able to interact 
  with it anywhere on the world I find it to be fascinating, 
  it is the reason I got hooked at age 15 with my first project. 
  This feeling is something I always try to tap into when I'm 
  developing projects.`

  if (!repos) return <p>Loading..</p>

  return (
    <>
      <Header /> {/* add a close button to the headers */}
      <SectionTitle txt1={`Pinned`} txt2={`projects I've built`} />
      <section id={s.pinned}>

        <div className={s.image_box}>
          <img src={devPlus} />
        </div>

        <div className={s.details_box}>

          {/* name */}
          <div className={s.name_box}>
            <div className={s.folder_icon}>
              <FontAwesomeIcon icon={faFolder} />
            </div>
            <div className={s.name}>dev-plus</div>
          </div>

          {/* about */}
          <div className={s.about}>
            Fun web application with multiple components
            that display information about a developer
            in real time, with a gamification aspect
            to it. Inspired by RPG game profiles.
          </div>

          {/* tech */}
          <div className={s.tags_wrapper}></div>

        </div>

      </section>

      <section id={s.pinned}>

        <div className={s.details_box}>


          {/* name */}
          <div className={s.name_box}>
            <div className={s.folder_icon}>
              <FontAwesomeIcon icon={faFolder} />
            </div>
            <div className={s.name}>dev-plus</div>
          </div>


          {/* about */}
          <div className={s.about}>
            Fun web application with multiple components
            that display information about a developer
            in real time, with a gamification aspect
            to it. Inspired by RPG game profiles.
          </div>

          {/* tech */}
          <div className={s.tags_wrapper}></div>

        </div>

        <div className={s.image_box}>
          <img src={tipMeDash} />
        </div>

      </section>

    </>
  )
}
