import React, { ReactNode } from 'react'
import NavBar from './elements/navbar/NavBar'

interface AppLayoutProps {
  heading?: string,
  type?: string | 'full',
  children: ReactNode
}

const AppLayout = ({ children, heading, type }: AppLayoutProps) => {
  return (
    <>
      <NavBar />
      <div className={`${type === 'full' ? 'mt-14 md:mt-16' : 'mt-16 md:mt-24 container mx-auto'}`}>
        {heading && <h1 className="mb-4">{heading}</h1>}
        {children}
      </div>
    </>
  )
}

export default AppLayout
