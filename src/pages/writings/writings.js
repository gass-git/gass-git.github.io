import React from 'react'
import s from './styles.module.css'
import ArticleCard from './children/articleCard'
import { ReactComponent as Thinking } from '../../assets/SVGs/thinking.svg'
import Header from '../../layouts/header'

export default function Writings({ articles }) {

  const about = `From time to time when I'm not to focused on a project
  I like publishing articles and technical content on dev.to.
  I usually have fun coding and I try to spread it
  with others. I write begginer friendly and also more advanced
  stuff. Check them out!`

  if (!articles) return <span>LOADING...</span>

  else return (
    <>
      <Header SVG={<Thinking />} title='writings' about={about} />
      {articles.map((article) => <ArticleCard s={s} article={article} />)}
    </>
  )
}

