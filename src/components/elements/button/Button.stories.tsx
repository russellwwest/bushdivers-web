import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Primary: ComponentStory<typeof Button> = () => <Button action={() => null} color="primary">Primary</Button>
export const Secondary: ComponentStory<typeof Button> = () => <Button action={() => null} color="secondary">Secondary</Button>
export const Danger: ComponentStory<typeof Button> = () => <Button action={() => null} color="danger">Danger</Button>
export const Small: ComponentStory<typeof Button> = () => <Button action={() => null} size="sm">Small</Button>
export const Large: ComponentStory<typeof Button> = () => <Button action={() => null} size="lg">Large</Button>
export const IconButton: ComponentStory<typeof Button> = () => <Button action={() => null} color="secondary" attr="Moon"><FontAwesomeIcon icon={faMoon} size="lg" /></Button>
