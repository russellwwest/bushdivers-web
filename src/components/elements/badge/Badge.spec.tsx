import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Badge from './Badge'

describe('Badge component', () => {
  it('should render', async () => {
    render(<Badge label="Test"/>)
  })
  it('should show label', async () => {
    render(<Badge label="Test" />)
    const element = screen.getByTestId('badge')
    expect(element).toHaveTextContent('Test')
  })
  it('renders primary badge', async () => {
    render(<Badge label="Test" color="primary" />)
    const element = screen.getByTestId('badge')
    expect(element.className.includes('bg-orange-100')).toBeTruthy()
  })
  it('renders primary badge by default', async () => {
    render(<Badge label="Test" />)
    const element = screen.getByTestId('badge')
    expect(element.className.includes('bg-orange-100')).toBeTruthy()
  })
  it('renders gray badge', async () => {
    render(<Badge label="Test" color="gray" />)
    const element = screen.getByTestId('badge')
    expect(element.className.includes('bg-gray-100')).toBeTruthy()
  })
  it('renders danger badge', async () => {
    render(<Badge label="Test" color="danger" />)
    const element = screen.getByTestId('badge')
    expect(element.className.includes('bg-red-100')).toBeTruthy()
  })
})
