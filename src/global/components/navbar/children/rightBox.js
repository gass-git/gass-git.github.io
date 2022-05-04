import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'
import tickSound from '../../../assets/sounds/tick.wav'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import s from '../styles.module.css'

export default function RightBox({ showArrows, isActive, moveRight }) {
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
    moveRight()
    playSound()
    setClickEffect(true)
  }

  return (
    <div
      className={isActive.right ? `${s.right_box} ${s.active}` : `${s.right_box}`}
      onClick={isActive.right ? handleClick : null}
    >
      {
        showArrows ?
          <ArrowForwardIosRoundedIcon
            fontSize='small'
            className={clickEffect ? `${s.green}` : `${s.white}`}
          />
          :
          null
      }
    </div>
  )
}
