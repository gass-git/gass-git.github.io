import React from 'react'
import s from './writings.module.css'
import ArticleCard from './components/articleCard'
import Header from './components/header'
import { margin } from '@mui/system'

export default function Writings({ articles }) {

  if (!articles) return <span>LOADING...</span>

  else return (
    <>

      <Header latestArticle={articles[0]} />
      <section id={s.archives}>
        <div style={{
          display: 'flex',
          width: '50%',
          margin: '0px 0px 30px 20px',
          borderBottom: '2px solid rgba(255,255,255,0.2)'
        }}>
          <div
            style={{
              color: '#eee',
              fontFamily: 'roboto',
              fontSize: '40px',
              margin: '50px 0px 0px 0px',
              fontWeight: '700'
            }}
          >
            Archives
          </div>

          <div
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'roboto',
              fontSize: '19px',
              lineHeight: '20px',
              margin: '70px 0px 0px 10px',
              fontWeight: '400',
              fontStyle: 'italic'
            }}
          >
            search articles by topic
          </div>
        </div>


        <div className={s.topics_wrapper}>
          <div className={s.topic_label}>
            javascript
          </div>
          <div className={s.topic_label}>
            html
          </div>
          <div className={s.topic_label}>
            setinterval
          </div>
          <div className={s.topic_label}>
            javascript
          </div>
          <div className={s.topic_label}>
            javascript
          </div>
          <div className={s.topic_label}>
            html
          </div>
          <div className={s.topic_label}>
            setinterval
          </div>
          <div className={s.topic_label}>
            javascript
          </div>

        </div>
      </section>

      <section id={s.list}>
        {articles.map((article) => <ArticleCard s={s} article={article} />)}
      </section>
    </>
  )
}