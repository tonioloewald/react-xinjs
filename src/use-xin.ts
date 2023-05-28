import { useState, useEffect } from 'react'
import { xin, observe, unobserve, xinPath, XinTouchableType } from 'xinjs'

type HookType = [
  value: any,
  setValue: (newValue: any) => void
]

// TODO declare type the way it's declated for useState so that TypeScript
// passes through type of initialValue to the right thing

export const useXin = (observed: XinTouchableType, initialValue: any = ''): HookType => {
  const path = typeof observed === 'string' ? observed : xinPath(observed)
  if (typeof path !== 'string') {
    console.error('useXin must either be passed a path or a XinProxy', observed)
    throw new Error('useXin must either be passed a path or a XinProxy')
  }
  const [value, update] = useState(xin[path] !== undefined ? xin[path] : initialValue)
  useEffect(() => {
    const observer = (): void => {
      update(xin[path])
    }
    const listener = observe(path, observer)
    return () => {
      unobserve(listener)
    }
  })
  const setValue = (value: any): void => {
    xin[path] = value
  }
  return [value, setValue]
}
