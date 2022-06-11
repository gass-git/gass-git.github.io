import React from 'react'
import s from './logo.module.css'
import sound from '../../../assets/sounds/game_blip.wav'
import useSound from 'use-sound'

export default function Logo({dispatch, appMuted}) {
  const [playSound] = useSound(sound, {volume: 0.18, playbackRate:0.7})
  
  function handleClick(){
    playSound()
    dispatch({type: 'update app mute state'})
  }
  
  return (
    <section 
      title='Mute App'
      className={appMuted? s.muted_logo : s.non_muted_logo}
      onClick={() => handleClick()}>
    	G
    </section>
  )
}
