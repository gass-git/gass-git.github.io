import React, { useEffect, useReducer, createContext } from 'react'
import './global/styles.css'
import Navbar from './global/components/navbar/navbar'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import Stats from './pages/stats/stats'
import Writings from './pages/writings/writings'
import Footer from './global/components/footer/footer'
import Display from './global/components/display/display'
import { appReducer, initialState } from './stateCapsule'
import fetchAllData from './global/functions/fetchAllData'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AppContext = createContext(null)

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const { selected } = state
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init()
    fetchAllData({dispatch})
    
    let interval = setInterval(() => {
      dispatch({type: 'next scroller message'})
    }, 20500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let pathname = location.pathname.slice(1)
    if (selected !== pathname) {
      dispatch({type:'update navbar selection', pathname: pathname})
    }
  })
  
  return (
    <AppContext.Provider value={{ state, dispatch }} key={'ctx-key'}>
      <div className='app-container' data-aos="flip-up" data-aos-duration="3000">

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
