import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';

export default {
  title: 'UI Core/Typography',
  component: Typography,
  argTypes: {},
} as ComponentMeta<typeof Typography>;

const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

const defaultArgs = {
  children: lorem,
} as const;

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const Heading1 = Template.bind({});
Heading1.args = {
  ...defaultArgs,
  variant: 'heading1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  ...defaultArgs,
  variant: 'heading2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  ...defaultArgs,
  variant: 'heading3',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  ...defaultArgs,
  variant: 'heading4',
};

export const Heading5 = Template.bind({});
Heading5.args = {
  ...defaultArgs,
  variant: 'heading5',
};

export const Heading6 = Template.bind({});
Heading6.args = {
  ...defaultArgs,
  variant: 'heading6',
};

export const Body = Template.bind({});
Body.args = {
  ...defaultArgs,
  variant: 'body',
};

export const Caption = Template.bind({});
Caption.args = {
  ...defaultArgs,
  variant: 'caption',
};
