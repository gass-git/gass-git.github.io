import React from 'react'
import s from './home.module.css'
import Latest from './components/latest'
import SectionTitle from '../../global/layouts/sectionTitle'
import Header from './components/header'

export default function Home({ latest }) {
  if (!latest) {
    return <div>Loading</div>
  }

  else {
    return (
      <section id={s.home}>
        <Header />
        <SectionTitle txt1={'Latest'} txt2={'activity online'} />
        <Latest latest={latest} />
      </section>
    )
  }

}
