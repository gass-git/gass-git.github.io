import React from 'react'
import s from './styles.module.css'
import ArticleCard from './children/articleCard'
import tome from '../../assets/images/scroll.png'

export default function Writings({ articles }) {
  if (articles === undefined) {
    return <span>LOADING...</span>
  }
  else if (articles) {
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src={tome}
            style={{ width: '120px', marginRight: '0px' }}
          />
          <span
            style={{
              fontSize: '35px',
              fontWeight: '700',
              color: 'white',
              opacity: '0.8'
            }}
          >
            Writings
          </span>
        </div>
        {articles.map((article) => <ArticleCard s={s} article={article} />)}
      </>
    )
  }
}
