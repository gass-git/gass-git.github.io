import React from 'react'
import { ReactComponent as Thinking } from '../../../global/assets/SVGs/thinking.svg'
import s from './header.module.css'

export default function Header({ latestArticle }) {
  return (
    <>
      <div className={s.header}>
        <div className={s.left_box}>
          <Thinking />
        </div>
        <div
          className={s.right_box}
          onClick={() => window.open(latestArticle.url, '_blank')}
        >
          <div className={s.label}>
            Latest
          </div>
          <div className={s.title}>
            {latestArticle.title}
          </div>
          <div className={s.sentence}>
            {latestArticle.description}
          </div>
        </div>
      </div>
    </>
  )
}
