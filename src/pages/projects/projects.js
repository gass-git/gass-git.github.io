import React from 'react'
import s from './projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Innovation } from '../../global/assets/SVGs/innovation.svg'
import devPlus from '../../global/assets/images/dev_plus.jpg'
import tipMeDash from '../../global/assets/images/tip_me_dash.jpg'
import minimis from '../../global/assets/images/minimis.png'
import Header from '../../global/layouts/header'
import SectionTitle from '../../global/layouts/sectionTitle'

export default function Projects({ repos }) {

  const about = `I like to think of programming as a catalyst for 
  creating tool. To portray an idea into reality and be able to interact
  with it anywhere on the world I find it to be fascinating. I'm constantly
  building things and the persue for building the future inspires me
  to keep grinding.`

  if (!repos) return <p>Loading..</p>

  return (<>
    {/* add a close button to the headers */}
    <Header SVG={<Innovation />} title={''} about={about} />
    {/*<SectionTitle svg={<FontAwesomeIcon icon={faWrench} />} title={'Some Things I’ve Built'} />*/}
    <center><h1 style={{ color: 'white', margin: '35px 0 35px 0' }}>Things I've Built 👇</h1></center>
    <section id={s.gallery}>

      <div className={s.first_row}>
        <div className={s.image_wrapper}>
          <img src={devPlus} />
        </div>
      </div>

      <div className={s.second_row}>
        <div className={s.left_image_wrapper}>
          <img src={minimis} width='450' />
        </div>
        <div className={s.right_image_wrapper}>
          <img src={tipMeDash} width='500' />
        </div>
      </div>

    </section>

  </>
  )
}
