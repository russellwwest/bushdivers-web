import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Avatar from './Avatar'

describe('Avatar component', () => {
  it('should render', async () => {
    render(<Avatar name="Test User" />)
  })
  it('should show initials', async () => {
    render(<Avatar name="Test User" />)
    const element = screen.getByTestId('avatar')
    expect(element).toHaveTextContent('TU')
  })
  it('should show first and last initials', async () => {
    render(<Avatar name="Test User Name" />)
    const element = screen.getByTestId('avatar')
    expect(element).toHaveTextContent('TN')
  })
})
