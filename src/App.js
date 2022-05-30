import React, { useEffect, useReducer, createContext } from 'react'
import './global/styles.css'
import Navbar from './global/components/navbar/navbar'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import Stats from './pages/stats/stats'
import Writings from './pages/writings/writings'
import { fetchArticles, getLatestArticle } from './global/APIs/dev'
import { fetchGithubStats, fetchRepos, getLatestCommit } from './global/APIs/github'
import { fetchReputation, fetchTopTech } from './global/APIs/SO'
import { fetchLatest } from './global/APIs/latest'
import Footer from './global/components/footer/footer'
import Display from './global/components/display/display'
import { uniqueVisits, getVisitorLocation } from './global/APIs/visits'
import { getLatestAnswer } from './global/APIs/SO'
import { appReducer, initialState } from './stateCapsule'

export const AppContext = createContext(null)

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const { selected, scrollerMsgIndex, scrollMessages } = state

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // always coordinate the menu with the current location pathname
    if (selected !== location.pathname) navigate(selected)

    fetchLatest({ dispatch })
    fetchRepos({ dispatch })
    fetchArticles({ dispatch })
    fetchReputation({ dispatch })
    fetchTopTech({ dispatch })
    fetchGithubStats({ dispatch })
    uniqueVisits({ dispatch })
    getVisitorLocation({ dispatch })
    getLatestArticle({ dispatch })
    getLatestAnswer({ dispatch })
    getLatestCommit({ dispatch })
  }, [])

  // interval for scroll display
  useEffect(() => {
    let interval = setInterval(() => {
      if (scrollerMsgIndex < scrollMessages - 1) dispatch({ type: 'next scroller msg index' })
      else dispatch({ type: 'reset scroller msg index' })

      // reset scroller
      dispatch({ type: 'set scroller off' })

      setTimeout(() => {
        dispatch({ type: 'set scroller on' })
      }, 500)

    }, 20000)
    return () => clearInterval(interval)
  })

  return (
    <AppContext.Provider value={{ state, dispatch }} key={'ctx-key'}>
      <div className='app-container'>

        <section id='top'>
          <Display />
          <Navbar />
        </section>

        <section id='content'>
          <Routes>
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/writings' element={<Writings />} />
            <Route path='/stats' element={<Stats />} />
          </Routes>
        </section>

        <section id='bottom'>
          <Footer />
        </section>

      </div>
    </AppContext.Provider>
  )
}

export default App
