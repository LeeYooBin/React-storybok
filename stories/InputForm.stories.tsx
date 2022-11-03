import React from "react";

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputForm } from '../src/components/InputForm';

export default {
    title: 'Components/InputForm',
    component: InputForm,
} as ComponentMeta <typeof InputForm>

const Template: ComponentStory<typeof InputForm> = (props) => <InputForm {...props}/>;

export const Primary = Template.bind({});