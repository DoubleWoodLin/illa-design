import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Trigger, TriggerProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { Button } from "@illa-design/button"
import { Space } from "@illa-design/space"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Trigger",
  component: Trigger,
  decorators: [withTests({ results })],
} as Meta

export const Basic: Story<TriggerProps> = (args) => {
  return <Space direction="vertical">
    <Space>
      <Trigger {...args} position="tl" content="TL"><Button>TL</Button></Trigger>
      <Trigger {...args} position="top"><Button>TOP</Button></Trigger>
      <Trigger {...args} position="tr" content="TR"><Button>TR</Button></Trigger>
    </Space>
    <Space direction="horizontal" size="200px">
      <Space direction="vertical">
        <Trigger {...args} position="lt" content="LT"><Button>LT</Button></Trigger>
        <Trigger {...args} position="left" content="LEFT"><Button>LEFT</Button></Trigger>
        <Trigger {...args} position="lb" content="LB"><Button>LB</Button></Trigger>
      </Space>
      <Space direction="vertical">
        <Trigger {...args} position="rt" content="RT"><Button>RT</Button></Trigger>
        <Trigger {...args} position="right" content="RIGHT"><Button>RIGHT</Button></Trigger>
        <Trigger {...args} position="rb" content="RB"><Button>RB</Button></Trigger>
      </Space>
    </Space>
    <Space style={{ marginLeft: "70px" }}>
      <Trigger {...args} position="bl" content="BL"><Button>BL</Button></Trigger>
      <Trigger {...args} position="bottom" content="我是个测试"><Button>BOTTOM</Button></Trigger>
      <Trigger {...args} position="br"
               content="A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or pro"><Button>BR</Button></Trigger>
    </Space>
  </Space>
}
