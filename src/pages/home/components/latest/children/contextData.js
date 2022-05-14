import React from 'react'
import s from './contextData.module.css'
import secondsToDate from '../../../../../global/functions/secondsToDate'

export default function ContextData({ created_at, type, repo_name }) {
  return (
    <div className={s.context_box}>
      {secondsToDate(created_at)}
      {' '}
      /
      {' '}
      {type}
      {repo_name ? ` / repo: ${repo_name.slice(9)}` : null}
    </div>
  )
}