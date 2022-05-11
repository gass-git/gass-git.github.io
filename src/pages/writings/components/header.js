import React from 'react'
import s from './header.module.css'
import cyberpunk from '../../../global/assets/images/cyberpunk_2.gif'

export default function Header({ latestArticle }) {
  return (
    <>
      <div className={s.header}
        style={{
          backgroundImage: `url(${cyberpunk})`
        }}
      >
        <div className={s.left_box}>

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
