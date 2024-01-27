import { Meta, StoryObj } from "@storybook/react"
import { Character } from "."

const meta: Meta<typeof Character> = {
  component: Character,
}

export default meta

type Story = StoryObj<typeof Character>

export const Primary: Story = {
  render: () => <Character />,
}
