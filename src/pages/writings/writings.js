import React from 'react'
import s from './styles.module.css'
import ArticleCard from './children/articleCard'
import { ReactComponent as Thinking } from '../../assets/SVGs/thinking.svg'

export default function Writings({ articles }) {
  if (articles === undefined) {
    return <span>LOADING...</span>
  }
  else if (articles) {
    return (
      <>
        <div
          style={{
            display: 'flex'
          }}
        >
          <div>
            <Thinking />
          </div>
          <div style={{ marginTop: '15px' }}>
            <h1 style={{ color: 'rgb(70, 201, 70)' }}>Writings</h1>
            <div style={{ color: '#ddd', marginRight: '20px' }}>
              From time to time when I'm not to focused on a project
              I like publishing articles and technical content on dev.to.
              I usually have fun coding and I try to spread it
              with others. I write begginer friendly and also more advanced
              stuff. Check them out!

            </div>
          </div>
        </div>
        {articles.map((article) => <ArticleCard s={s} article={article} />)}
      </>
    )
  }
}
