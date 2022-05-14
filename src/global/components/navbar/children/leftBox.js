import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'
import tickSound from '../../../assets/sounds/tick.wav'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import s from '../navbar.module.css'

export default function LeftBox({ showArrows, isActive, moveLeft }) {
  const [playSound] = useSound(tickSound, { volume: 0.6 })
  const [clickEffect, setClickEffect] = useState(false)

  useEffect(() => {
    if (clickEffect) {
      setTimeout(() => {
        setClickEffect(false)
      }, 200)
    }
  }, [clickEffect])


  function handleClick() {
    moveLeft()
    playSound()
    setClickEffect(true)
  }

  return (
    <div
      className={isActive.left ? `${s.left_box} ${s.active}` : `${s.left_box}`}
      onClick={isActive.left ? handleClick : null}
    >
      {
        showArrows ?
          <ArrowBackIosRoundedIcon
            fontSize='small'
            className={clickEffect ? s.green : s.white}
          />
          :
          null
      }
    </div>
  )
}
