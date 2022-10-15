import React from 'react'

interface DividerProps {
  size?: 'sm' | 'md'
}

const Divider = ({ size }: DividerProps) => {
  return (
    <hr className={`${size === 'sm' ? 'my-2' : 'my-4'} h-px bg-gray-200 border-0 dark:bg-gray-700`} />
  )
}

export default Divider
