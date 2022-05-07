import React from 'react'
import { ReactComponent as Developer } from '../../global/assets/SVGs/developer.svg'
import s from './home.module.css'
import TornadoBtn from '../../global/components/tornadoBtn/tornadoBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTornado } from '@fortawesome/free-solid-svg-icons'

export default function Latest({ latest }) {

  if (!latest) return <div>Loading</div>

  return (
    <section id={s.home}>

      <div className={s.box_for_centering}>
        <Developer className={s.svg} />

        <div className={s.wrapper}>
          <div className={s.title}>
            Gass Dev
          </div>
          <div className={s.subtitle}>
            Pushing web development forward
          </div>
        </div>

        <div className={s.buttons_wrapper}>
          <TornadoBtn
            svg={<FontAwesomeIcon icon={faUser} />}
            text='about'
          />
          <TornadoBtn
            svg={<FontAwesomeIcon icon={faTornado} />}
            text='latest events'
          />
        </div>
      </div>

      {/* social links */}

      {/* (heart) sponsor */}
      {/* buy me a coffee */} {/* patreon */} {/* tip me dash */}

    </section>
  )
}
