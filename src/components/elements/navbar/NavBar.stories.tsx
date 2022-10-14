import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import NavBar from './NavBar'

export default {
  title: 'Navbar',
  component: NavBar
} as ComponentMeta<typeof NavBar>

export const AppBar: ComponentStory<typeof NavBar> = () => <NavBar />
