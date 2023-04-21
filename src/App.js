import React, { useEffect, useReducer, createContext } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { appReducer, initialState } from './stateCapsule'
import Navbar from './global/components/navbar/navbar'
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import Stats from './pages/stats/stats'
import Writings from './pages/writings/writings'
import Display from './global/components/display/display'
import fetchAllData from './global/functions/fetchAllData'
import Spinner from './global/components/spinner/spinner'
import './global/styles.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Modal from './global/components/modal/modal'

export const AppContext = createContext(null)

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const { selected, appLoading } = state
  const location = useLocation()
  const pinnedProjects = ["dev-plus", "tip-me-dash"]

  useEffect(() => {
    AOS.init({ once: true })
    fetchAllData({ dispatch }, pinnedProjects)

    setTimeout(() => {
      dispatch({ type: 'loading completed' })
    }, 4000)
    let interval = setInterval(() => dispatch({ type: 'next scroller msg' }), 20500)
    return () => clearInterval(interval)
  }, []) // eslint-disable-line

  useEffect(() => {
    if (selected !== location.pathname.slice(1)) {
      dispatch({ type: 'update navbar selection', pathname: location.pathname.slice(1) })
    }
  })

  if (appLoading) {
    return (
      <div className='loader_wrapper'>
        <Spinner />
      </div>
    )
  }

  else {
    return (
      <AppContext.Provider value={{ state, dispatch }} key={'ctx-key'}>
        <Modal />
        <div className='app_container' data-aos='fade' data-aos-duration='2000'>

          <section id='top'>
            <Display />
            <Navbar />
          </section>

          <section id='content'>
            <Routes>
              <Route path='*' element={<Navigate to='/home' />} />
              <Route path='/' element={<Navigate to='/home' />} />
              <Route path='/home' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/writings' element={<Writings />} />
              <Route path='/stats' element={<Stats />} />
            </Routes>
          </section>

        <section id='bottom'>
        </section>
        
        </div>
      </AppContext.Provider>
    )
  }
}
