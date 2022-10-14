import React, { ReactNode, FC } from 'react'

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger',
  children?: ReactNode,
  action: Function,
  size?: 'sm' | 'lg' | 'md',
  attr?: string
}

function renderStyle (type: ButtonProps['color']) {
  switch (type) {
    case 'primary':
      return 'bg-orange-500 text-gray-800 hover:bg-orange-400 focus:ring-orange-300 dark:focus:ring-orange-800'
    case 'secondary':
      return 'bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-gray-50 dark:focus:ring-gray-700'
    case 'danger':
      return 'bg-red-500 hover:bg-red-400 text-gray-800 focus:ring-red-300 dark:focus:ring-red-800'
    default:
      return 'bg-orange-500 text-gray-800 hover:bg-orange-400 focus:ring-orange-300 dark:focus:ring-orange-800'
  }
}

const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  size = 'md',
  action,
  attr
}) => {
  return (
    <button aria-label={attr}
      className={`
        ${renderStyle(color)}
        ${size === 'sm' ? 'py-2 px-3 text-xs' : size === 'lg' ? 'py-3 px-5 text-base' : 'px-5 py-2.5'}
        focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none
      `}
      onClick={() => action()}
    >
      {children}
    </button>
  )
}

export default Button
