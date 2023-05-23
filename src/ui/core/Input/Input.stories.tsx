import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'UI Core/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ maxWidth: 300 }}>
    <Input {...args} />
  </div>
);

const defaultArgs = {} as const;

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
