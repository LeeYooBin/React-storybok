import React from "react";

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SaveButton } from '../src/components/SaveButton';

export default {
    title: 'Components/SaveButton',
    component: SaveButton
} as ComponentMeta<typeof SaveButton>

const Template: ComponentStory<typeof SaveButton> = args => <SaveButton {...args}/>;

export const Primary = Template.bind({});