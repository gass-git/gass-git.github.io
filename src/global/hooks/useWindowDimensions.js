import { useState, useEffect } from 'react';

function getDimensions() {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window
  return { windowWidth, windowHeight }
}

export default function useWindowDimensions() {
  const [dimensions, setDimensions] = useState(getDimensions())

  useEffect(() => {
    window.addEventListener('resize', () => setDimensions(getDimensions()))
    return () => window.removeEventListener('resize', () => setDimensions(getDimensions()))
  }, [])

  return dimensions
}