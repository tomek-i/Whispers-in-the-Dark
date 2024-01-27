import { Meta, StoryObj } from '@storybook/react';
import { ScarletWoman } from ".";


const meta: Meta<typeof ScarletWoman> = {
  component: ScarletWoman,
};

export default meta;

type Story = StoryObj<typeof ScarletWoman>;

export const Primary: Story = {
  render: () => <ScarletWoman />,
};
