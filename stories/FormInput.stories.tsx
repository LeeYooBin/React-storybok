import React from "react";

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormInput } from '../src';

export default {
    title: 'Components/FormInput',
    component: FormInput
} as ComponentMeta<typeof FormInput>

const Template: ComponentStory<typeof FormInput> = args => <FormInput {...args}/>;

export const Primary = Template.bind({});