import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from './Spinner';

export default {
  title: 'UI Core/Spinner',
  component: Spinner,
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <div style={{ maxWidth: 300 }}>
    <Spinner {...args} />
  </div>
);

const defaultArgs = {} as const;

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
