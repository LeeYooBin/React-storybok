import React from "react";

import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoginInput from "../src/components/LoginInput";

export default {
    title: 'Components/LoginInput',
    component: LoginInput
} as ComponentMeta<typeof LoginInput>

const Template: ComponentStory<typeof LoginInput> = args => <LoginInput {...args}/>;

export const Primary = Template.bind({});