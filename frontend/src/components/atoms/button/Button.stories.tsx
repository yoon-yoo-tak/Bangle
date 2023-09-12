import { StoryObj, Meta } from '@storybook/react';
import Button from '.';

export default {
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    length: {
      type: 'string',
      control: 'select',
      options: ['long', 'short'],
      description: '길이',
    },
    size: {
      type: 'string',
      control: 'select',
      options: ['big', 'small'],
      description: '크기',
    },
    theme: {
      type: 'string',
      control: 'select',
      options: ['default', 'line', 'text'],
      description: '형태',
    },
    active: {
      type: 'boolean',
      control: 'select',
      options: [true, false],
      description: '활성화 여부',
    },
    content: {
      type: 'string',
      description: '내용',
    },
    icon: {
      type: 'string',
      description: '아이콘'
    }
  },
  render: (args) => <Button {...args} />,
};

export const LongBigBtn: Story = {
  ...Template,
  name: 'Long & Big',
  args: {
    ...Template.args,
    length: 'long',
    size: 'big',
    theme: 'default',
    active: true,
    content: '테스트컨텐츠',
  },
};

export const shortBigBtn: Story = {
  ...Template,
  name: 'Short & Big',
  args: {
    ...Template.args,
    length: 'short',
    size: 'big',
    theme: 'default',
    active: true,
    content: '테스트컨텐츠',
  },
};

export const LongSmallBtn: Story = {
  ...Template,
  name: 'Long & Small',
  args: {
    ...Template.args,
    length: 'long',
    size: 'small',
    theme: 'default',
    active: true,
    content: '테스트컨텐츠',
  },
};

export const shortSmallBtn: Story = {
  ...Template,
  name: 'Short & Small',
  args: {
    ...Template.args,
    length: 'short',
    size: 'small',
    theme: 'default',
    active: true,
    content: '테스트컨텐츠',
  },
};

export const lineBtn: Story = {
  ...Template,
  name: 'Line',
  args: {
    ...Template.args,
    length: 'short',
    size: 'small',
    theme: 'line',
    active: true,
    content: '테스트컨텐츠',
  },
};

export const withIcon: Story = {
  ...Template,
  name: 'Short & Small & Icon',
  args: {
    ...Template.args,
    length: 'short',
    size: 'small',
    active: true,
    theme: 'default',
    content: '테스트컨텐츠',
    icon: 'mode',
  },
};

export const textBtn: Story = {
  ...Template,
  name: 'Text',
  args: {
    ...Template.args,
    length: 'long',
    size: 'small',
    theme: 'text',
    active: true,
    content: '테스트컨텐츠',
    icon: 'mode',
  },
};
