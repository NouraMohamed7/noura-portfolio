import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById('cursorGlow')
    if (!glow) return

    const handleMove = (e) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }

    document.addEventListener('mousemove', handleMove)
    return () => document.removeEventListener('mousemove', handleMove)
  }, [])

  return <div className="cursor-glow" id="cursorGlow" />
}
