import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Avatar from './Avatar'

export default {
  title: 'Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>

export const Default: ComponentStory<typeof Avatar> = () => <Avatar name="Russell West" />
