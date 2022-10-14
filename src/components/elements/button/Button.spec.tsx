import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

describe('Button Component', () => {
  it('should render', async () => {
    render(<Button action={() => null}>Click</Button>)
  })
  it('renders secondary button', async () => {
    render(<Button action={() => null} color="secondary" />)
    const btn = screen.getByRole('button')
    expect(btn.className.includes('bg-gray-200')).toBeTruthy()
  })
  it('renders primary button', async () => {
    render(<Button action={() => null} color="primary" />)
    const btn = screen.getByRole('button')
    expect(btn.className.includes('bg-orange-500')).toBeTruthy()
  })
  it('renders danger button', async () => {
    render(<Button action={() => null} color="danger" />)
    const btn = screen.getByRole('button')
    expect(btn.className.includes('bg-red-500')).toBeTruthy()
  })
  it('renders small button', async () => {
    render(<Button action={() => null} size="sm" />)
    const btn = screen.getByRole('button')
    expect(btn.className.includes('py-2 px-3')).toBeTruthy()
  })
  it('renders standard button', async () => {
    render(<Button action={() => null} size="md" />)
    const btn = screen.getByRole('button')
    expect(btn.className.includes('px-5 py-2.5')).toBeTruthy()
  })
  it('renders large button', async () => {
    render(<Button action={() => null} size="lg" />)
    const btn = screen.getByRole('button')
    expect(btn.className.includes('py-3 px-5')).toBeTruthy()
  })
})
