import React from 'react'
import { ReactComponent as Innovation } from '../../../global/assets/SVGs/innovation.svg'
import s from './header.module.css'

export default function Header() {
  return (
    <>
      <div className={s.header}>
        <div className={s.left_box}>
          <Innovation />
        </div>
        <div
          className={s.right_box}
        >
          <div className={s.about}>
            For me programming is a catalyst for creation.
            To portray an idea into reality and be able to interact
            with it anywhere on the world I find it to be fascinating.
            It is the reason I got hooked at age 15 with my first project.
            <br /><br />
            I'm constantly building projects related to web development.
            Feel free to have a look around and check them out!
          </div>
        </div>
      </div>
    </>
  )
}