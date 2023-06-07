import React, { useLayoutEffect } from 'react'
import { Gradient } from './lib/Gradient'

export default function CanvasBackground () {
    useLayoutEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas')
  }, [])

  return (
    <div className='gradient-container'>
      <canvas id="gradient-canvas" data-transition-in />
    </div>
  )
}
