import React from "react";

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SearchInput } from '../src/components/SearchInput';

export default {
    title: 'Components/SearchInput',
    component: SearchInput
} as ComponentMeta<typeof SearchInput>

const Template: ComponentStory<typeof SearchInput> = args => <SearchInput {...args}/>;

export const Primary = Template.bind({});