import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Divider from './Divider'

export default {
  title: 'Divider',
  component: Divider
} as ComponentMeta<typeof Divider>

export const Standard: ComponentStory<any> = () => <div><span>This is text above</span><Divider /><span>This is text below</span></div>
export const Small: ComponentStory<any> = () => <div><span>This is text above</span><Divider size="sm" /><span>This is text below</span></div>
