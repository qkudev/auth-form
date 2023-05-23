import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from './Link';

export default {
  title: 'UI Core/Link',
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <div style={{ maxWidth: 300 }}>
    <Link {...args} />
  </div>
);

const defaultArgs = {
  href: '/',
  children: 'Link',
} as const;

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
