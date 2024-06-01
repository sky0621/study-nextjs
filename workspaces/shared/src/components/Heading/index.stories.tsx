import { Heading } from "@/components/Heading/index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Heading,
  args: { children: "見出し" },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: { level: 1 },
};
