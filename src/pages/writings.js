import React from 'react'
import Title from '../layouts/title'

export default function Writings({ articles }) {

  function ArticleCard({ article }) {
    return (
      <div style={{ border: '1px solid white', marginTop: '10px' }}>
        <div style={{ display: 'flex' }}>
          <div>
            <img src={article.cover_url} height='100' width='100' />
          </div>
          <div>
            {article.title}
          </div>
        </div>
      </div>
    )
  }

  if (articles === undefined) {
    return <span>LOADING...</span>
  }
  else if (articles) {
    return (
      <>
        <Title pageName='writings' />
        {articles.map((article) => <ArticleCard article={article} />)}
      </>
    )
  }
}
