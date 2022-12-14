import React from 'react'

interface BadgeProps {
  label: string,
  color?: 'primary' | 'gray' | 'danger'
}

function renderColor (color?: string) {
  switch (color) {
    case 'primary':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-200 dark:text-orange-800'
    case 'gray':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-200 dark:text-gray-800'
    case 'danger':
      return 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-800'
    default:
      return 'bg-orange-100 text-orange-800 dark:bg-orange-200 dark:text-orange-800'
  }
}

const Badge = ({ label, color }: BadgeProps) => {
  return (
    <span data-testid="badge" className={`${renderColor(color)} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}>{label}</span>
  )
}

export default Badge
