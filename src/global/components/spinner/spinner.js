import React from 'react'
import s from './spinner.module.css'

export default function Spinner() {
  return (
    <div className={s.lds_grid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}
