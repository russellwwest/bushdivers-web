import React, { ReactNode } from 'react'

interface CardProps {
  title?: string,
  children: ReactNode
}

const Card = ({ children, title }: CardProps) => {
  return (
    <div className="block p-6 bg-white md:rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {title && <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>}
      {children}
    </div>
  )
}

export default Card
