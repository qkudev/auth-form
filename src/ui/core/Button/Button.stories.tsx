import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { IconSearch } from '../../icons';

export default {
  title: 'UI Core/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div
    style={{
      background: 'white',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      rowGap: 20,
    }}
  >
    <Button {...args} />
    <Button {...args} icon={undefined} />
  </div>
);

const defaultArgs = {
  loading: false,
  disabled: false,
  floating: false,
  label: 'Button',
  size: 'medium',
  variant: 'primary',
  icon: <IconSearch size={20} />,
} as const;

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  variant: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: 'small',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultArgs,
  disabled: true,
};
