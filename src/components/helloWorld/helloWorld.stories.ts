import type { Meta, StoryObj } from '@storybook/react';

import { HelloWorld } from './helloWorld';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/HelloWorld',
  component: HelloWorld,
  parameters: {
    // Optional parameters. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: { control: 'text' },
  },
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const World: Story = {
  args: {
    name: 'world',
  },
};

export const People: Story = {
  args: {
    name: 'people',
  },
};
