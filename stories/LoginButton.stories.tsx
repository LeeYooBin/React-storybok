import React from "react";

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginButton } from '../src';

export default {
    title: 'Components/LoginButton',
    component: LoginButton
} as ComponentMeta<typeof LoginButton>

const Template: ComponentStory<typeof LoginButton> = (props) => <LoginButton {...props}/>;

export const Primary = Template.bind({});