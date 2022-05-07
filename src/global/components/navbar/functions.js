import s from './styles.module.css'

function handleTranslationStates({ windowWidth, setHiddenItems, setTranslationWidth }) {
  if (windowWidth < 599 && windowWidth >= 530) {
    setHiddenItems({ left: 0, right: 1 })
    setTranslationWidth(125)
  }
  else if (windowWidth < 530 && windowWidth >= 465) {
    setHiddenItems({ left: 0, right: 1 })
    setTranslationWidth(105)
  }
  else if (windowWidth < 465 && windowWidth >= 410) {
    setHiddenItems({ left: 0, right: 2 })
    setTranslationWidth(132)
  }
  else if (windowWidth < 410 && windowWidth >= 350) {
    setHiddenItems({ left: 0, right: 2 })
    setTranslationWidth(115)
  }
  else if (windowWidth < 350 && windowWidth >= 300) {
    setHiddenItems({ left: 0, right: 3 })
    setTranslationWidth(200)
  }
  else if (windowWidth < 300 && windowWidth >= 275) {
    setHiddenItems({ left: 0, right: 3 })
    setTranslationWidth(157)
  }
  else if (windowWidth < 275 && windowWidth >= 260) {
    setHiddenItems({ left: 0, right: 3 })
    setTranslationWidth(142)
  }
  else if (windowWidth < 260) {
    setHiddenItems({ left: 0, right: 3 })
    setTranslationWidth(129)
  }
}

function handleArrowsState({ windowWidth, setShowArrows, setIsActive }) {
  if (windowWidth >= 599) {
    setShowArrows(false)
  }
  else {
    setShowArrows(true)
    setIsActive({ left: false, right: true })
  }
}

function movableLineClass({ selected }) {
  switch (selected) {
    case 'home': return `${s.movable_line} ${s.pos1}`
    case 'projects': return `${s.movable_line} ${s.pos2}`
    case 'writings': return `${s.movable_line} ${s.pos3}`
    case 'stats': return `${s.movable_line} ${s.pos4}`
    default: return null
  }
}

export { handleArrowsState, handleTranslationStates, movableLineClass }